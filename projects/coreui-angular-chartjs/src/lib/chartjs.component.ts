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

import { assign, find, merge } from 'lodash';

import Chart, { ChartData, ChartOptions, ChartType, Plugin } from 'chart.js/auto';
import * as chartjs from 'chart.js';

import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs';
import { IChartjs } from './chartjs.interface';

let nextId = 0;

@Component({
  selector: 'c-chart',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
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
  @Input() plugins?: Plugin[];

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

  get computedData() {
    const canvasRef = this.canvasElement.nativeElement;
    return typeof this.data === 'function'
      ? canvasRef.value
        ? this.data(canvasRef.value)
        : { datasets: [] }
      : merge({}, this.data);
  }

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.setupChart();
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.data.firstChange) {
      this.updateChart();
    }
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }

  handleOnClick($event: MouseEvent) {
    if (!this.chart) return;

    const datasetAtEvent = this.chart.getElementsAtEventForMode($event, 'dataset', { intersect: true }, false);
    this.getDatasetAtEvent.emit(datasetAtEvent);

    const elementAtEvent = this.chart.getElementsAtEventForMode($event, 'nearest', { intersect: true }, false);
    this.getElementAtEvent.emit(elementAtEvent);

    const elementsAtEvent = this.chart.getElementsAtEventForMode($event, 'index', { intersect: true }, false);
    this.getElementsAtEvent.emit(elementsAtEvent);
  }

  destroyChart() {
    this.chart?.destroy();
  }

  setupChart() {
    if (!this.canvasElement) return;

    if (this.customTooltips) {
      chartjs.defaults.plugins.tooltip.enabled = false;
      chartjs.defaults.plugins.tooltip.mode = 'index';
      chartjs.defaults.plugins.tooltip.position = 'nearest';
      chartjs.defaults.plugins.tooltip.external = cuiCustomTooltips;
    }

    const ctx: CanvasRenderingContext2D = this.canvasElement.nativeElement.getContext('2d');

    return this.ngZone.runOutsideAngular(() => {
      this.chart = new Chart(ctx, {
        type: this.type,
        data: this.computedData,
        options: this.options as ChartOptions,
        plugins: this.plugins
      });
      setTimeout(() => {
        this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'block');
      })
    });
  }

  updateChart() {
    if (!this.chart) return;

    if (this.redraw) {
      this.destroyChart();
      setTimeout(() => {
        this.setupChart();
      });
      return;
    }

    if (this.options) {
      this.chart.options = { ...this.options };
    }

    if (!this.chart.config.data) {
      this.chart.config.data = this.computedData;
      this.ngZone.runOutsideAngular(() => {
        this.chart?.update();
      });
      return;
    }

    const { datasets: newDataSets = [], ...newChartData } = this.computedData;
    const { datasets: currentDataSets = [] } = this.chart.config.data;

    // copy values
    assign(this.chart.config.data, newChartData);
    this.chart.config.data.datasets = newDataSets.map((newDataSet: any) => {
      // given the new set, find it's current match
      const currentDataSet = find(
        currentDataSets,
        (d: any) => d.label === newDataSet.label && d.type === newDataSet.type
      );

      // There is no original to update, so simply add new one
      if (!currentDataSet || !newDataSet.data) return newDataSet;

      if (!currentDataSet.data) {
        currentDataSet.data = [];
      } else {
        currentDataSet.data.length = newDataSet.data.length;
      }

      // copy in values
      assign(currentDataSet.data, newDataSet.data);

      // apply dataset changes, but keep copied data
      return {
        ...currentDataSet,
        ...newDataSet,
        data: currentDataSet.data
      };
    });
    setTimeout(() => {
      this.ngZone.runOutsideAngular(() => {
        this.chart?.update();
      });
    })
  }
}
