import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { OffcanvasToggleDirective } from './offcanvas-toggle.directive';
import { OffcanvasService } from '../offcanvas.service';

@Component({
  template: ` <button cOffcanvasToggle="OffcanvasEnd">OffcanvasToggle Test</button>`,
  imports: [OffcanvasToggleDirective]
})
class TestComponent {}

describe('OffcanvasToggleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let service: OffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, OffcanvasToggleDirective, TestComponent],
      providers: [OffcanvasService]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('button'));
    service = TestBed.inject(OffcanvasService);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new OffcanvasToggleDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should toggle offcanvas on click', fakeAsync(() => {
    service.offcanvasState$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual({ show: 'toggle', id: 'OffcanvasEnd' });
    });
    debugElement.nativeElement.dispatchEvent(new MouseEvent('click'));
  }));
});
