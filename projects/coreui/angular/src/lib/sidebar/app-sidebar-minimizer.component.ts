import { Component, HostBinding, HostListener, Optional } from '@angular/core';
import { AppSidebarComponent } from './app-sidebar.component';

@Component({
  selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
  template: ``
})
export class AppSidebarMinimizerComponent {

  @HostBinding('attr.role') role = 'button';
  @HostBinding('class.sidebar-minimizer') _minimizer = true;

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.sidebar.toggleMinimized();
  }

  constructor(@Optional() private sidebar: AppSidebarComponent) {
    if (!sidebar) {
      throw Error(`AppSidebarMinimizer must be placed within a AppSidebar component.`);
    }
  }
}
