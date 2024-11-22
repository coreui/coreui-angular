import { Directive } from '@angular/core';

@Directive({
  selector: '[cPageLink]',
  host: { class: 'page-link' }
})
export class PageLinkDirective {}
