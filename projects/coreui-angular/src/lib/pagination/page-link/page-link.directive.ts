import { Directive } from '@angular/core';

@Directive({
  selector: '[cPageLink]',
  standalone: true,
  host: { class: 'page-link' }
})
export class PageLinkDirective {}
