import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-modal-dialog',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent {
  /**
   * Align the modal in the center or top of the screen.
   * @type {'top' | 'center'}
   */
  @Input() alignment?: 'top' | 'center';
  /**
   * Set modal to covers the entire user viewport.
   * @type {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  @Input() fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * Does the modal dialog itself scroll, or does the whole dialog scroll within the window.
   * @type boolean
   */
  @Input() scrollable?: boolean;
  /**
   * Size the component small, large, or extra large.
   */
  @Input() size?: 'sm' | 'lg' | 'xl';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-dialog': true,
      'modal-dialog-centered': this.alignment === 'center',
      'modal-fullscreen': this.fullscreen === true,
      [`modal-fullscreen-${this.fullscreen}-down`]: this.fullscreen,
      'modal-dialog-scrollable': this.scrollable,
      [`modal-${this.size}`]: this.size
    };
  }
}
