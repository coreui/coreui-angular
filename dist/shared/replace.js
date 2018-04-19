export function Replace(el) {
    var nativeElement = el.nativeElement;
    var parentElement = nativeElement.parentElement;
    // move all children out of the element
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}
//# sourceMappingURL=replace.js.map