import { booleanAttribute, Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-modal-dialog',
  template: '<ng-content />',
  styleUrls: ['./modal-dialog.component.scss'],
  host: { class: 'modal-dialog', '[class]': 'hostClasses()' }
})
export class ModalDialogComponent {
  /**
   * Align the modal in the center or top of the screen.
   * @default undefined
   */
  readonly alignment = input<'top' | 'center'>();

  /**
   * Set modal to covers the entire user viewport.
   * @return {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  readonly fullscreen = input<boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>();

  /**
   * Does the modal dialog itself scroll, or does the whole dialog scroll within the window.
   * @default false
   * @return {boolean}
   */
  readonly scrollable = input(false, { transform: booleanAttribute });

  /**
   * Size the component small, large, or extra large.
   * @default undefined
   * @return {'sm' | 'lg' | 'xl'}
   */
  readonly size = input<'sm' | 'lg' | 'xl'>();

  readonly hostClasses = computed(() => {
    const fullscreen = this.fullscreen();
    const size = this.size();
    return {
      'modal-dialog': true,
      'modal-dialog-centered': this.alignment() === 'center',
      'modal-fullscreen': fullscreen === true,
      [`modal-fullscreen-${fullscreen}-down`]: typeof fullscreen === 'string',
      'modal-dialog-scrollable': this.scrollable(),
      [`modal-${size}`]: !!size
    } as Record<string, boolean>;
  });
}
