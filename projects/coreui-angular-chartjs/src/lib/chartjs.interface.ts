import { ChartData, ChartOptions, ChartType, Plugin } from 'chart.js/auto';
import { EventEmitter } from '@angular/core';

export interface IChartjs {
  /**
   * Enables custom html based tooltips instead of standard tooltips.
   * @default true
   */
  customTooltips?: boolean;

  /**
   * The data object that is passed into the Chart.js chart (more info).
   */
  data: ChartData | ((canvas: HTMLCanvasElement) => ChartData) | undefined;

  /**
   * Height attribute applied to the rendered canvas.
   *
   * @default 150
   */
  height?: number;

  /**
   * id html attribute applied to the rendered canvas.
   */
  id?: string;

  /**
   * The options object that is passed into the Chart.js chart.
   * {@link https://www.chartjs.org/docs/latest/general/options.html More Info}
   */
  options?: ChartOptions;

  /**
   * The plugins array that is passed into the Chart.js chart (more info)
   * {@link https://www.chartjs.org/docs/latest/developers/plugins.html More Info}
   */
  plugins?: Plugin[];

  /**
   * If true, will tear down and redraw chart on all updates.
   * @default false
   */
  redraw?: boolean;

  /**
   * Chart.js chart type.
   * @type {'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'}
   */
  type: ChartType;

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

}
