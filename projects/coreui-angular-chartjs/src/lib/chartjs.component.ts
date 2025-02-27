import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  linkedSignal,
  NgZone,
  numberAttribute,
  OnChanges,
  OnDestroy,
  output,
  Renderer2,
  SimpleChanges,
  untracked,
  viewChild
} from '@angular/core';

import merge from 'lodash-es/merge';

import type { ChartConfiguration, ChartData, ChartOptions, ChartType, InteractionItem, Plugin } from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs';
import { BooleanInput } from './chartjs.interface';

ChartJS.register(...registerables);

let nextId = 0;

@Component({
  selector: 'c-chart',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
  exportAs: 'cChart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClasses()',
    '[style.height.px]': 'height()',
    '[style.width.px]': 'width()'
  }
})
export class ChartjsComponent implements OnDestroy, OnChanges {
  //
  static ngAcceptInputType_redraw: BooleanInput;

  private readonly ngZone = inject(NgZone);
  private readonly renderer = inject(Renderer2);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  /**
   * Enables custom html based tooltips instead of standard tooltips.
   * @return boolean
   * @default true
   */
  readonly customTooltips = input<boolean, unknown>(true, { transform: booleanAttribute });

  /**
   * The data object that is passed into the Chart.js chart (more info).
   */
  readonly data = input<ChartData>();

  /**
   * A fallback when the canvas cannot be rendered. Can be used for accessible chart descriptions.
   */
  // @Input() fallbackContent?: TemplateRef<any>;

  /**
   * Height attribute applied to the rendered canvas.
   * @return number | undefined
   * @default null
   */
  readonly height = input(null, { transform: (value) => numberAttribute(value, undefined) });

  /**
   * ID attribute applied to the rendered canvas.
   * @return string
   */
  readonly idInput = input<string>(`c-chartjs-${nextId++}`, { alias: 'id' });

  get id() {
    return this.idInput();
  }

  /**
   * The options object that is passed into the Chart.js chart.
   */
  readonly optionsInput = input<ChartOptions | undefined>({}, { alias: 'options' });

  readonly options = linkedSignal(this.optionsInput);

  /**
   * The plugins array that is passed into the Chart.js chart
   */
  readonly plugins = input<Plugin[]>([]);

  /**
   * If true, will tear down and redraw chart on all updates.
   * @return boolean
   * @default false
   */
  readonly redraw = input(false, { transform: booleanAttribute });

  /**
   * Chart.js chart type.
   * @return {'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'}
   */
  readonly type = input<ChartType>('bar');

  /**
   * Width attribute applied to the rendered canvas.
   * @return number | undefined
   * @default null
   */
  readonly width = input(null, { transform: (value) => numberAttribute(value, undefined) });

  /**
   * Put the chart into the wrapper div element.
   * @default true
   */
  readonly wrapper = input(true, { transform: booleanAttribute });

  readonly getDatasetAtEvent = output<InteractionItem[]>();
  readonly getElementAtEvent = output<InteractionItem[]>();
  readonly getElementsAtEvent = output<InteractionItem[]>();

  readonly chartRef = output<any>();

  readonly canvasElement = viewChild.required<ElementRef>('canvasElement');

  chart!: ChartJS;
  ctx!: CanvasRenderingContext2D;

  readonly hostClasses = computed(() => {
    return {
      'chart-wrapper': this.wrapper()
    };
  });

  constructor() {
    afterRenderEffect({
      read: () => {
        const canvasElement = this.canvasElement();
        this.ctx = canvasElement?.nativeElement?.getContext('2d');
        this.chartRender();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      this.chartUpdate();
    }
  }

  ngOnDestroy(): void {
    this.chartDestroy();
  }

  public handleClick($event: MouseEvent) {
    if (!this.chart) {
      return;
    }

    const datasetAtEvent: InteractionItem[] = this.chart.getElementsAtEventForMode(
      $event,
      'dataset',
      { intersect: true },
      false
    );
    this.getDatasetAtEvent.emit(datasetAtEvent);

    const elementAtEvent: InteractionItem[] = this.chart.getElementsAtEventForMode(
      $event,
      'nearest',
      { intersect: true },
      false
    );
    this.getElementAtEvent.emit(elementAtEvent);

    const elementsAtEvent: InteractionItem[] = this.chart.getElementsAtEventForMode(
      $event,
      'index',
      { intersect: true },
      false
    );
    this.getElementsAtEvent.emit(elementsAtEvent);
  }

  public chartDestroy() {
    this.chart?.destroy();
    this.chartRef.emit(undefined);
  }

  public chartRender() {
    const canvasElement = this.canvasElement();
    if (!canvasElement?.nativeElement || !this.ctx || this.chart) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const config = this.chartConfig();
      if (config) {
        this.chart = new ChartJS(this.ctx, config);
        this.ngZone.run(() => {
          this.renderer.setStyle(canvasElement.nativeElement, 'display', 'block');
          this.changeDetectorRef.markForCheck();
          this.chartRef.emit(this.chart);
        });
      }
    });
  }

  chartUpdate() {
    if (!this.chart) {
      return;
    }

    if (this.redraw()) {
      this.chartDestroy();
      this.chartRender();
      return;
    }

    const config: ChartConfiguration = this.chartConfig();

    if (this.options()) {
      Object.assign(this.chart.options ?? {}, config.options ?? {});
    }

    if (!this.chart.config.data) {
      this.chart.config.data = { ...config.data };
      this.chartUpdateOutsideAngular();
    }

    if (this.chart) {
      Object.assign(this.chart.config.options ?? {}, config.options ?? {});
      Object.assign(this.chart.config.plugins ?? [], config.plugins ?? []);
      Object.assign(this.chart.config.data, config.data);
    }

    this.chartUpdateOutsideAngular();
  }

  private chartUpdateOutsideAngular() {
    setTimeout(() => {
      this.ngZone.runOutsideAngular(() => {
        this.chart?.update();
        this.ngZone.run(() => {
          this.changeDetectorRef.markForCheck();
        });
      });
    });
  }

  public chartToBase64Image(): string | undefined {
    return this.chart?.toBase64Image();
  }

  private chartDataConfig = computed<ChartData>(() => {
    const { labels, datasets } = { ...this.data() };
    return {
      labels: labels ?? [],
      datasets: datasets ?? []
    };
  });

  readonly chartOptions = computed<ChartOptions>(() => this.options() ?? {});

  readonly chartConfig = computed<ChartConfiguration>(() => {
    this.chartCustomTooltips();
    return {
      data: this.chartDataConfig(),
      options: this.chartOptions(),
      plugins: this.plugins(),
      type: this.type()
    };
  });

  private chartCustomTooltips() {
    if (this.customTooltips()) {
      const options = this.options();
      const plugins = options?.plugins;
      const tooltip = options?.plugins?.tooltip;
      untracked(() => {
        this.options.set(
          merge({
            ...options,
            plugins: {
              ...plugins,
              tooltip: {
                ...tooltip,
                enabled: false,
                mode: 'index',
                position: 'nearest',
                external: cuiCustomTooltips
              }
            }
          })
        );
      });
    }
  }
}
