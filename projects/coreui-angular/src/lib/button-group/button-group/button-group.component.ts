import { booleanAttribute, Component, computed, input, InputSignalWithTransform } from '@angular/core';

@Component({
  selector: 'c-button-group',
  template: '<ng-content />',
  host: { '[attr.role]': 'role()', '[class]': 'hostClasses()' }
})
export class ButtonGroupComponent {
  /**
   * Size the component small or large.
   * @return { 'sm' | 'lg' }
   */
  readonly size = input<'' | 'sm' | 'lg' | string>();

  /**
   * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
   * @type boolean
   */
  readonly vertical: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Default role attr for ButtonGroup. [docs]
   * @return string
   * @default 'group'
   */
  readonly role = input<string>('group');

  readonly hostClasses = computed(() => {
    const size = this.size();
    const vertical = this.vertical();
    return {
      'btn-group': !vertical,
      'btn-group-vertical': vertical,
      [`btn-group-${size}`]: !!size
    } as Record<string, boolean>;
  });
}
