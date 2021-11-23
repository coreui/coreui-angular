import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

import assign from 'lodash/assign';
import find from 'lodash/find';
import merge from 'lodash/merge';

import { Chart, ChartData, ChartOptions, ChartType, Plugin } from 'chart.js/auto';
import * as chartjs from 'chart.js';

import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs';
import { IChartjs } from './chartjs.interface';

@Component({
  selector: 'c-chart',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements IChartjs, OnDestroy, OnInit {
  @Input() customTooltips = true;
  @Input() data: ChartData | ((canvas: HTMLCanvasElement) => ChartData) | undefined;

  @Input()
  set height(value: number) {
    this._height = coerceNumberProperty(value);
  }
  get height() {
    return this._height;
  }
  private _height = 150;

  @Input() id?: string;
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

  @Input()
  set width(value: number) {
    this._width = coerceNumberProperty(value);
  }
  get width() {
    return this._width;
  }

  private _width = 300;
  @Input() wrapper = true;

  @Output() getDatasetAtEvent = new EventEmitter<any>();
  @Output() getElementAtEvent = new EventEmitter<any>();
  @Output() getElementsAtEvent = new EventEmitter<any>();

  @ViewChild('canvasElement') canvasElement!: ElementRef;

  private chart: Chart | undefined;

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

  constructor() {}

  ngOnInit(): void {
    this.setupChart();
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }

  setupChart() {
    if (!this.canvasElement) return;

    const canvasRef = this.canvasElement.nativeElement;

    if (this.customTooltips) {
      chartjs.defaults.plugins.tooltip.enabled = false;
      chartjs.defaults.plugins.tooltip.mode = 'index';
      chartjs.defaults.plugins.tooltip.position = 'nearest';
      chartjs.defaults.plugins.tooltip.external = cuiCustomTooltips;
    }

    this.chart = new Chart(canvasRef.value, {
      type: this.type,
      data: this.computedData,
      options: this.options as ChartOptions,
      plugins: this.plugins
    });
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

  updateChart() {
    if (!this.chart) return;

    if (this.options) {
      this.chart.options = { ...this.options };
    }

    if (!this.chart.config.data) {
      this.chart.config.data = this.computedData;
      this.chart.update();
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

    this.chart?.update();
  }
}
