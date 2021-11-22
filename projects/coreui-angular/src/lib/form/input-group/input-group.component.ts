import {
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'c-input-group',
  template: `<ng-content></ng-content>`,
})
export class InputGroupComponent {
  /**
   * Size the component small or large.
   */
  @Input() sizing: string | 'sm' | 'lg' | '' = '';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'input-group': true,
      [`input-group-${this.sizing}`]: !!this.sizing,
    };
  }

  constructor() {}

}
