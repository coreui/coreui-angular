import { Component, HostBinding, HostListener, Input, inject } from '@angular/core';

import { AppSidebarService } from './app-sidebar.service';

@Component({
  selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
  template: ``,
  standalone: true
})
export class AppSidebarMinimizerComponent {
  private sidebarService = inject(AppSidebarService);


  @HostBinding('attr.role') @Input() role = 'button';
  @HostBinding('class.sidebar-minimizer') sidebarMinimizerClass = true;

  @HostListener('click', ['$event'])
  toggleOpen($event: Event) {
    $event.preventDefault();
    this.sidebarService.toggle({ minimize: 'toggle' });
  }
}
