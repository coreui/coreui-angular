import {
  afterRender,
  AfterViewInit,
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgZone,
  numberAttribute,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import merge from 'lodash-es/merge';

import type { ChartConfiguration, ChartData, ChartOptions, ChartType, InteractionItem, Plugin } from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs';

ChartJS.register(...registerables);

let nextId = 0;

@Component({
  selector: 'c-chart',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
  exportAs: 'cChart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
  // host: { ngSkipHydration: 'true' }
})
export class ChartjsComponent implements AfterViewInit, OnDestroy, OnChanges {
  /**
   * Enables custom html based tooltips instead of standard tooltips.
   * @type boolean
   * @default true
   */
  @Input({ transform: booleanAttribute }) customTooltips: boolean = true;

  /**
   * The data object that is passed into the Chart.js chart (more info).
   */
  @Input() data?: ChartData;

  /**
   * A fallback when the canvas cannot be rendered. Can be used for accessible chart descriptions.
   */
  // @Input() fallbackContent?: TemplateRef<any>;

  /**
   * Height attribute applied to the rendered canvas.
   * @type number | undefined
   * @default 150
   */
  @HostBinding('style.height.px')
  @Input({ transform: (value: string | number) => numberAttribute(value, undefined) })
  height?: number;

  /**
   * ID attribute applied to the rendered canvas.
   * @type string
   */
  @Input() id: string = `c-chartjs-${nextId++}`;

  /**
   * The options object that is passed into the Chart.js chart.
   */
  @Input() options?: ChartOptions = {};

  /**
   * The plugins array that is passed into the Chart.js chart
   */
  @Input() plugins: Plugin[] = [];

  /**
   * If true, will tear down and redraw chart on all updates.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) redraw: boolean = false;

  /**
   * Chart.js chart type.
   * @type {'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'}
   */
  @Input() type: ChartType = 'bar';

  /**
   * Width attribute applied to the rendered canvas.
   * @type number | undefined
   * @default 300
   */
  @HostBinding('style.width.px')
  @Input({ transform: (value: string | number) => numberAttribute(value, undefined) })
  width?: number;

  /**
   * Put the chart into the wrapper div element.
   * @default true
   */
  @Input({ transform: booleanAttribute }) wrapper = true;

  @Output() readonly getDatasetAtEvent = new EventEmitter<any>();
  @Output() readonly getElementAtEvent = new EventEmitter<any>();
  @Output() readonly getElementsAtEvent = new EventEmitter<any>();

  @Output() readonly chartRef = new EventEmitter<any>();

  @ViewChild('canvasElement') canvasElement!: ElementRef;

  chart!: ChartJS;
  ctx!: CanvasRenderingContext2D;

  @HostBinding('class')
  get hostClasses() {
    return {
      'chart-wrapper': this.wrapper
    };
  }

  constructor(
    private readonly ngZone: NgZone,
    private readonly renderer: Renderer2,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    // todo: verify afterRender / afterNextRender for chartjs (spec fails with 17.0.10)
    afterRender({
      write: () => {
        this.ctx = this.canvasElement?.nativeElement?.getContext('2d');
        this.chartRender();
      }
    });
  }

  ngAfterViewInit(): void {
    this.chartRender();
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
    if (!this.canvasElement?.nativeElement || !this.ctx || this.chart) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const config = this.chartConfig();
      if (config) {
        this.chart = new ChartJS(this.ctx, config);
        this.ngZone.run(() => {
          this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'block');
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

    if (this.redraw) {
      this.chartDestroy();
      this.chartRender();
      return;
    }

    const config: ChartConfiguration = this.chartConfig();

    if (this.options) {
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

  private chartDataConfig(): ChartData {
    return {
      labels: this.data?.labels ?? [],
      datasets: this.data?.datasets ?? []
    };
  }

  private chartOptions(): ChartOptions {
    return this.options ?? {};
  }

  private chartConfig(): ChartConfiguration {
    this.chartCustomTooltips();
    return {
      data: this.chartDataConfig(),
      options: this.chartOptions(),
      plugins: this.plugins,
      type: this.type
    };
  }

  private chartCustomTooltips() {
    if (this.customTooltips) {
      const options = this.options;
      const plugins = this.options?.plugins;
      const tooltip = this.options?.plugins?.tooltip;
      this.options = merge({
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
      });
    }
  }
}
