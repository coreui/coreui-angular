export function Replace(el: any): any {
  const nativeElement: HTMLElement = el.nativeElement;
  const parentElement: HTMLElement = nativeElement.parentElement;
  // move all children out of the element
  while (nativeElement.firstChild) {
    parentElement.insertBefore(nativeElement.firstChild, nativeElement);
  }
  // remove the empty element(the host)
  parentElement.removeChild(nativeElement);
}
