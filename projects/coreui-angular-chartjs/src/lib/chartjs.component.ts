import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty, coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';

import merge from 'lodash-es/merge';

import { Chart, ChartConfiguration, ChartOptions, ChartType, DefaultDataPoint, registerables } from 'chart.js';
import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs';

Chart.register(...registerables);

let nextId = 0;

@Component({
  selector: 'c-chart',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
  exportAs: 'cChart'
})
export class ChartjsComponent<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> implements AfterViewInit, OnDestroy, OnChanges {

  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_width: NumberInput;
  static ngAcceptInputType_redraw: BooleanInput;

  @Input() customTooltips = true;
  @Input() data?: ChartConfiguration<TType, TData, TLabel>['data'];

  @HostBinding('style.height.px')
  @Input()
  set height(value: number | undefined) {
    this._height = coerceNumberProperty(value);
  }

  get height() {
    return this._height;
  }

  private _height: number | undefined;

  @Input() id = `c-chartjs-${nextId++}`;
  @Input() options?: ChartConfiguration<TType, TData, TLabel>['options'];
  @Input() plugins: ChartConfiguration<TType, TData, TLabel>['plugins'] = [];

  @Input()
  set redraw(value: boolean) {
    this._redraw = coerceBooleanProperty(value);
  }

  get redraw(): boolean {
    return this._redraw;
  }

  private _redraw = false;

  @Input() type: ChartConfiguration<TType, TData, TLabel>['type'] = 'bar' as TType;

  @HostBinding('style.width.px')
  @Input()
  set width(value: number | undefined) {
    this._width = coerceNumberProperty(value);
  }

  get width() {
    return this._width;
  }

  private _width: number | undefined;

  @Input() wrapper = true;

  @Output() getDatasetAtEvent = new EventEmitter<any>();
  @Output() getElementAtEvent = new EventEmitter<any>();
  @Output() getElementsAtEvent = new EventEmitter<any>();

  @ViewChild('canvasElement') canvasElement!: ElementRef;

  chart!: Chart<TType, TData, TLabel>;

  @HostBinding('class')
  get hostClasses() {
    return {
      'chart-wrapper': this.wrapper
    };
  }

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.chartRender();
    // this.chartUpdate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      this.chartUpdate();
    }
  }

  ngOnDestroy(): void {
    this.chartDestroy();
  }

  public handleOnClick($event: MouseEvent) {
    if (!this.chart) return;

    const datasetAtEvent = this.chart.getElementsAtEventForMode($event, 'dataset', { intersect: true }, false);
    this.getDatasetAtEvent.emit(datasetAtEvent);

    const elementAtEvent = this.chart.getElementsAtEventForMode($event, 'nearest', { intersect: true }, false);
    this.getElementAtEvent.emit(elementAtEvent);

    const elementsAtEvent = this.chart.getElementsAtEventForMode($event, 'index', { intersect: true }, false);
    this.getElementsAtEvent.emit(elementsAtEvent);
  }

  public chartDestroy() {
    this.chart?.destroy();
  }

  public chartRender() {
    if (!this.canvasElement) return;

    const ctx: CanvasRenderingContext2D = this.canvasElement.nativeElement.getContext('2d');

    this.ngZone.runOutsideAngular(() => {
      const config = this.chartConfig();
      if (config) {
        setTimeout(() => {
          this.chart = new Chart(ctx, config);
          this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'block');
        });
      }
    });
  }

  chartUpdate() {
    if (!this.chart) return;

    if (this.redraw) {
      this.chartDestroy();
      setTimeout(() => {
        this.chartRender();
      });
      return;
    }

    const config = this.chartConfig();

    if (this.options) {
      // todo
      // @ts-ignore
      Object.assign(this.chart.options, config.options);
    }

    if (!this.chart.config.data) {
      this.chart.config.data = { ...config.data };
      this.chartUpdateOutsideAngular();
    }

    if (this.chart) {
      // todo
      // @ts-ignore
      Object.assign(this.chart.config.options, config.options);
      // todo
      // @ts-ignore
      Object.assign(this.chart.config.plugins, config.plugins);
      Object.assign(this.chart.config.data, config.data);
    }

    this.chartUpdateOutsideAngular();
  }

  private chartUpdateOutsideAngular() {
    setTimeout(() => {
      this.ngZone.runOutsideAngular(() => {
        this.chart?.update();
      });
    });
  }

  public chartToBase64Image(): string | undefined {
    return this.chart?.toBase64Image();
  }

  private chartDataConfig(): ChartConfiguration<TType, TData, TLabel>['data'] {
    return {
      labels: this.data?.labels ?? [],
      datasets: this.data?.datasets ?? []
    };
  }

  private chartOptions(): ChartConfiguration<TType, TData, TLabel>['options'] {
    return this.options;
  }

  private chartConfig(): ChartConfiguration<TType, TData, TLabel> {
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
      // @ts-ignore
      const plugins = this.options?.plugins;
      // @ts-ignore
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
  };
}
