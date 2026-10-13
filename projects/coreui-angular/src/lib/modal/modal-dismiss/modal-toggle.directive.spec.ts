import { inputBinding } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '../modal.service';
import { ModalToggleDirective } from './modal-toggle.directive';

describe('ModalToggleDirective', () => {
  let fixture: DirectiveFixture<ModalToggleDirective>;

  beforeEach(async () => {
    fixture = TestBed.createDirective(ModalToggleDirective, {
      tagName: 'button',
      bindings: [inputBinding('cModalToggle', () => 'liveDemoModal')]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should handle click', async () => {
    const spy = vi.spyOn(fixture.directiveInstance, 'dismiss');
    (fixture.nativeElement as HTMLElement).click();
    await fixture.whenStable();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expect.any(MouseEvent));
  });

  it('should pass its host as the trigger', () => {
    const toggle = vi.spyOn(TestBed.inject(ModalService), 'toggle');
    (fixture.nativeElement as HTMLElement).click();
    expect(toggle).toHaveBeenCalledWith({ show: 'toggle', id: 'liveDemoModal', trigger: fixture.nativeElement });
  });

  it('should pass an empty id for a bare cModalToggle', async () => {
    const bareFixture = TestBed.createDirective(ModalToggleDirective, {
      tagName: 'button',
      bindings: [inputBinding('cModalToggle', () => '')]
    });
    await bareFixture.whenStable();
    const toggle = vi.spyOn(TestBed.inject(ModalService), 'toggle');
    (bareFixture.nativeElement as HTMLElement).click();
    expect(toggle).toHaveBeenCalledWith({ show: 'toggle', id: '', trigger: bareFixture.nativeElement });
  });
});
