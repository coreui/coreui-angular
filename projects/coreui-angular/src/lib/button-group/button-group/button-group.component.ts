import { booleanAttribute, Component, computed, input, InputSignal, InputSignalWithTransform } from '@angular/core';

@Component({
  selector: 'c-button-group',
  template: '<ng-content />',
  standalone: true,
  host: { '[attr.role]': 'role()', '[class]': 'hostClasses()' }
})
export class ButtonGroupComponent {
  /**
   * Size the component small or large.
   * @type { 'sm' | 'lg' }
   */
  readonly size: InputSignal<'sm' | 'lg' | undefined> = input();

  /**
   * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
   * @type boolean
   */
  readonly vertical: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Default role attr for ButtonGroup. [docs]
   * @type InputSignal<string>
   * @default 'group'
   */
  readonly role: InputSignal<string> = input('group');

  readonly hostClasses = computed(() => {
    return {
      'btn-group': !this.vertical(),
      'btn-group-vertical': this.vertical(),
      [`btn-group-${this.size()}`]: !!this.size()
    };
  });
}
