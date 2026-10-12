import { TestBed } from '@angular/core/testing';
import { ModalTitleDirective } from './modal-title.directive';

describe('ModalTitleDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(ModalTitleDirective, { tagName: 'h5' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('modal-title')).toBe(true);
  });
});
