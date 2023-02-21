import { ChartType } from 'chart.js/auto';
import { EventEmitter } from '@angular/core';
import { ChartConfiguration, DefaultDataPoint } from 'chart.js';

export interface IChartjs<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> {
  /**
   * Enables custom html based tooltips instead of standard tooltips.
   * @default true
   */
  customTooltips?: boolean;

  /**
   * The data object that is passed into the Chart.js chart (more info).
   */
  data?: ChartConfiguration<TType, TData, TLabel>['data'];

  /**
   * Height attribute applied to the rendered canvas.
   *
   * @default undefined
   */
  height?: number;

  /**
   * Html id attribute applied to the rendered canvas.
   */
  id?: string;

  /**
   * The options object that is passed into the Chart.js chart.
   * {@link https://www.chartjs.org/docs/latest/general/options.html More Info}
   */
  options?: ChartConfiguration<TType, TData, TLabel>['options'];

  /**
   * The plugins array that is passed into the Chart.js chart (more info)
   * {@link https://www.chartjs.org/docs/latest/developers/plugins.html More Info}
   */
  plugins?: ChartConfiguration<TType, TData, TLabel>['plugins'];

  /**
   * If true, will tear down and redraw chart on all updates.
   * @default false
   */
  redraw?: boolean;

  /**
   * Chart.js chart type.
   * @type {'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'}
   */
  type: ChartConfiguration<TType, TData, TLabel>['type'];

  /**
   * Width attribute applied to the rendered canvas.
   * @default 300
   */
  width?: number;

  /**
   * Put the chart into the wrapper div element.
   * @default true
   */
  wrapper?: boolean;

  /**
   * Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event.
   */
  getDatasetAtEvent: EventEmitter<any>;

  /**
   * Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event.
   */
  getElementAtEvent: EventEmitter<any>;

  /**
   * Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event.
   */
  getElementsAtEvent: EventEmitter<any>;

  /**
   * Emits the chart reference
   */
  chartRef: EventEmitter<any>;

}
