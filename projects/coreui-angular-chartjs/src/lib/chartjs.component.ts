import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  NgZone,
  numberAttribute,
  OnDestroy,
  output,
  Renderer2,
  untracked,
  viewChild
} from '@angular/core';

import { merge } from 'lodash-es';

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
    '[class.chart-wrapper]': 'wrapper()',
    '[style.height.px]': 'height()',
    '[style.width.px]': 'width()'
  }
})
export class ChartjsComponent implements OnDestroy {
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
  readonly customTooltips = input(true, { transform: booleanAttribute });

  /**
   * The data object that is passed into the Chart.js chart (more info).
   * @returns ChartData
   * @default { labels: [], datasets: [] }
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
   * @returns string
   * @default 'c-chartjs-' + nextId
   */
  readonly idInput = input<string>(`c-chartjs-${nextId++}`, { alias: 'id' });

  get id() {
    return this.idInput();
  }

  /**
   * The options object that is passed into the Chart.js chart.
   * @returns ChartOptions | undefined
   * @default {}
   */
  readonly optionsInput = input<ChartOptions | undefined>({}, { alias: 'options' });

  readonly options = linkedSignal(this.optionsInput);

  /**
   * The plugins array that is passed into the Chart.js chart
   * @returns Plugin[]
   * @default []
   */
  readonly plugins = input<Plugin[]>([]);

  /**
   * If true, will tear down and redraw chart on all updates.
   * @returns boolean
   * @default false
   */
  readonly redraw = input(false, { transform: booleanAttribute });

  /**
   * Chart.js chart type.
   * @returns {'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'}
   * @default 'bar'
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
   * @return boolean
   * @default true
   */
  readonly wrapper = input(true, { transform: booleanAttribute });

  /** Event emitted on click of a chart element. Contains an array of the clicked elements.
   * @returns InteractionItem[]
   * @see https://www.chartjs.org/docs/latest/developers/api.html#getelementsateventformode
   */
  readonly getDatasetAtEvent = output<InteractionItem[]>();

  /** Event emitted on click of a chart element. Contains an array of the clicked element.
   * @returns InteractionItem[]
   * @see https://www.chartjs.org/docs/latest/developers/api.html#getelementsateventformode
   */
  readonly getElementAtEvent = output<InteractionItem[]>();

  /** Event emitted on click of a chart element. Contains an array of the clicked elements.
   * @returns InteractionItem[]
   * @see https://www.chartjs.org/docs/latest/developers/api.html#getelementsateventformode
   */
  readonly getElementsAtEvent = output<InteractionItem[]>();

  /** Emits the Chart.js chart instance after it is created. Can be used to access Chart.js directly on the chart instance.
   * @returns ChartJS | undefined
   * @see https://www.chartjs.org/docs/latest/developers/api.html#chart-instance-methods
   */
  readonly chartRef = output<ChartJS | undefined>();

  readonly canvasElement = viewChild.required<ElementRef<HTMLCanvasElement>>('canvasElement');

  chart: ChartJS | undefined;
  readonly ctx = computed(() => this.canvasElement()?.nativeElement.getContext('2d'));

  constructor() {
    effect(() => {
      const ctx = this.ctx();
      if (ctx && !this.chart) {
        this.chartRender();
      }
    });

    effect(() => {
      const data = this.data();
      untracked(() => {
        if (this.chart && data) {
          this.chartUpdate();
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.chartDestroy();
  }

  public handleClick($event: MouseEvent): void {
    if (!this.chart) {
      return;
    }

    this.emitDatasetAtEvent($event);
    this.emitElementAtEvent($event);
    this.emitElementsAtEvent($event);
  }

  private emitDatasetAtEvent($event: MouseEvent): void {
    const datasetAtEvent = this.chart?.getElementsAtEventForMode($event, 'dataset', { intersect: true }, false);
    if (datasetAtEvent) {
      this.getDatasetAtEvent.emit(datasetAtEvent);
    }
  }

  private emitElementAtEvent($event: MouseEvent): void {
    const elementAtEvent = this.chart?.getElementsAtEventForMode($event, 'nearest', { intersect: true }, false);
    if (elementAtEvent) {
      this.getElementAtEvent.emit(elementAtEvent);
    }
  }

  private emitElementsAtEvent($event: MouseEvent): void {
    const elementsAtEvent = this.chart?.getElementsAtEventForMode($event, 'index', { intersect: true }, false);
    if (elementsAtEvent) {
      this.getElementsAtEvent.emit(elementsAtEvent);
    }
  }

  public chartDestroy() {
    this.chart?.destroy();
    this.chartRef.emit(undefined);
  }

  public chartRender() {
    const canvasElement = this.canvasElement();
    if (!canvasElement?.nativeElement || !this.ctx() || this.chart) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const config = this.chartConfig();
      const ctx = this.ctx();
      if (config && ctx) {
        this.chart = new ChartJS(ctx, config);
        this.ngZone.run(() => {
          this.renderer.setStyle(canvasElement.nativeElement, 'display', 'block');
          this.changeDetectorRef.markForCheck();
          this.chartRef.emit(this.chart);
        });
      }
    });
  }

  public chartUpdate() {
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
        try {
          if (this.chart?.canvas) {
            this.chart?.update();
          }
        } catch (error) {
          console.warn('Error on chart.update():', error);
        }
        this.ngZone.run(() => {
          this.changeDetectorRef.markForCheck();
        });
      });
    });
  }

  public chartToBase64Image(): string | undefined {
    return this.chart?.toBase64Image();
  }

  readonly chartDataConfig = computed<ChartData>(() => {
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
    if (!this.customTooltips()) {
      return;
    }
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
