import {Directive, HostListener, Input} from '@angular/core';

import {SidebarService} from '../sidebar.service';

/**
 * Allows the sidebar to be toggled/folded via click on host element.
 */
@Directive({
  selector: '[cSidebarToggle]',
  exportAs: 'cSidebarToggle',
  standalone: true
})
export class SidebarToggleDirective {
  /**
   * Id of sidebar for toggle action. [docs]
   *
   * @type string
   */
  @Input('cSidebarToggle') id?: string;
  /**
   * Sidebar property name for toggle action. [docs]
   *
   * @type 'visible' | 'unfoldable'
   * @default 'visible'
   */
  @Input() toggle: 'visible' | 'unfoldable' = 'visible'

  constructor(
    private sidebarService: SidebarService
  ) {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any): void {
    $event.preventDefault();
    this.sidebarService.toggle({ toggle: this.toggle, id: this.id });
  }
}
