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

import { merge } from 'lodash';

import Chart, { ChartData, ChartOptions, ChartType, Plugin } from 'chart.js/auto';

import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs';
import { IChartjs } from './chartjs.interface';

let nextId = 0;

@Component({
  selector: 'c-chart',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
  exportAs: 'cChart'
})
export class ChartjsComponent implements IChartjs, AfterViewInit, OnDestroy, OnChanges {

  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_width: NumberInput;
  static ngAcceptInputType_redraw: BooleanInput;

  @Input() customTooltips = true;
  @Input() data: ChartData | ((canvas: HTMLCanvasElement) => ChartData) | undefined;

  @HostBinding('style.height.px')
  @Input()
  set height(value: number) {
    this._height = coerceNumberProperty(value);
  }
  get height() {
    return this._height;
  }
  private _height = 150;

  @Input() id = `c-chartjs-${nextId++}`;
  @Input() options?: ChartOptions;
  @Input() plugins: Plugin[] = [];

  @Input()
  set redraw(value: boolean) {
    this._redraw = coerceBooleanProperty(value);
  }
  get redraw(): boolean {
    return this._redraw;
  }
  private _redraw = false;

  @Input() type: ChartType = 'bar';

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

  chart: Chart | undefined;

  @HostBinding('class')
  get hostClasses() {
    return {
      'chart-wrapper': this.wrapper
    };
  }

  get chartData() {
    const canvasRef = this.canvasElement.nativeElement;
    return typeof this.data === 'function'
      ? canvasRef.value
        ? this.data(canvasRef.value)
        : { labels: [], datasets: [] }
      : merge({ labels: [], datasets: [] }, { ...this.data });
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
    if (changes.data && !changes.data.firstChange) {
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

    if (this.customTooltips) {
      const options = this.options
      this.options = {
        ...options,
        plugins: {
          ...options?.plugins,
          tooltip: {
            ...options?.plugins?.tooltip,
            enabled: false,
            mode: 'index',
            position: 'nearest',
            external: cuiCustomTooltips
          }
        }
      };
    }

    const ctx: CanvasRenderingContext2D = this.canvasElement.nativeElement.getContext('2d');

    this.ngZone.runOutsideAngular(() => {
      const config = this.chartConfig();
      if (config) {
        this.chart = new Chart(ctx, config);
        setTimeout(() => {
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

    if (this.options) {
      this.chart.options = { ...this.options };
    }

    const config = this.chartConfig();

    if (!this.chart.config.data) {
      this.chart.config.data = { ...config.data };
      this.chartUpdateOutsideAngular();
    }

    if (this.chart) {
      Object.assign(this.chart.config.options, config.options);
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

  private chartDataConfig() {
    return {
      labels: this.chartData?.labels ?? [],
      datasets: [...this.chartData?.datasets] ?? []
    };
  }

  private chartConfig() {
    return {
      data: this.chartDataConfig(),
      options: this.options as ChartOptions,
      plugins: this.plugins,
      type: this.type
    };
  }
}
