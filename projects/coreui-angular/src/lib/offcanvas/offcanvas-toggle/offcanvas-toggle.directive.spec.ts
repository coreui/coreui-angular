import { inputBinding } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { take } from 'rxjs';
import { OffcanvasService } from '../offcanvas.service';
import { OffcanvasToggleDirective } from './offcanvas-toggle.directive';

describe('OffcanvasToggleDirective', () => {
  let fixture: DirectiveFixture<OffcanvasToggleDirective>;

  beforeEach(async () => {
    fixture = TestBed.createDirective(OffcanvasToggleDirective, {
      tagName: 'button',
      bindings: [inputBinding('cOffcanvasToggle', () => 'OffcanvasEnd')]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should toggle offcanvas on click', () => {
    let action;
    TestBed.inject(OffcanvasService)
      .offcanvasState$.pipe(take(1))
      .subscribe((value) => (action = value));
    fixture.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(action).toEqual({ show: 'toggle', id: 'OffcanvasEnd', trigger: fixture.nativeElement });
  });
});
