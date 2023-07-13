import { booleanAttribute, Component, HostBinding, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'c-progress',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class ProgressComponent {

  /**
   * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
   * @type number
   */
  @Input({ transform: numberAttribute }) height: string | number = 0;

  /**
   * Displays thin progress.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) thin: string | boolean = false;

  /**
   * Change the default color to white.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) white: string | boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      progress: true,
      'progress-thin': this.thin,
      'progress-white': this.white
    };
  }

  @HostBinding('style.height')
  get hostStyle(): any {
    return !!this.height ? `${this.height}px` : '';
  }
}
