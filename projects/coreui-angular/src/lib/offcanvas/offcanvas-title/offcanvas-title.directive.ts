import { Directive } from '@angular/core';

@Directive({
  selector: '[cOffcanvasTitle]',
  host: { class: 'offcanvas-title' }
})
export class OffcanvasTitleDirective {}
