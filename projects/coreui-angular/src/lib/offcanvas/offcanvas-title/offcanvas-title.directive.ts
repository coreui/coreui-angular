import { Directive } from '@angular/core';

@Directive({
  selector: '[cOffcanvasTitle]',
  standalone: true,
  host: { class: 'offcanvas-title' }
})
export class OffcanvasTitleDirective {}
