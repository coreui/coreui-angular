import { ElementRef } from '@angular/core';

export function Replace(el: ElementRef<HTMLElement>): void {
  const nativeElement = el.nativeElement;
  const parentElement = nativeElement.parentElement;
  if (!parentElement) {
    return;
  }
  // move all children out of the element
  while (nativeElement.firstChild) {
    parentElement.insertBefore(nativeElement.firstChild, nativeElement);
  }
  // remove the empty element(the host)
  parentElement.removeChild(nativeElement);
}
