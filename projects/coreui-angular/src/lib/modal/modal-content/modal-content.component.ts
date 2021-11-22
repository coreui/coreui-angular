import { Component, ElementRef, HostBinding, HostListener } from '@angular/core';
import { InteractivityChecker } from '@angular/cdk/a11y';

@Component({
  selector: 'c-modal-content',
  template: '<ng-content></ng-content>'
})
export class ModalContentComponent {

  constructor(
    private hostElement: ElementRef,
    private interactivityChecker: InteractivityChecker
  ) { }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-content': true
    };
  }

  @HostListener('click', ['$event'])
  public onClickHandler($event: MouseEvent): boolean {
    $event.stopPropagation();
    const targetElement = $event.target;
    return this.hostElement?.nativeElement?.contains(targetElement) &&
      this.interactivityChecker.isFocusable((targetElement as HTMLElement));
  }
}
