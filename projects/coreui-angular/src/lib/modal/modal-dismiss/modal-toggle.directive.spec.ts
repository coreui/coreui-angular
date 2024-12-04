import { ModalToggleDirective } from './modal-toggle.directive';
import { TestBed } from '@angular/core/testing';

describe('ModalDismissDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ModalToggleDirective();
      expect(directive).toBeTruthy();
    });
  });
});
