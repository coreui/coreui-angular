import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { OffcanvasToggleDirective } from './offcanvas-toggle.directive';
import { OffcanvasService } from '../offcanvas.service';

@Component({
  template: `
    <button cOffcanvasToggle="OffcanvasEnd">OffcanvasToggle Test</button>`
})
class TestButtonComponent {}

describe('OffcanvasToggleDirective', () => {

  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;
  let buttonEl: DebugElement;
  let service: OffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, OffcanvasToggleDirective],
      declarations: [TestButtonComponent],
      providers: [OffcanvasService]
    });
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button'));
    service = TestBed.inject(OffcanvasService);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    const directive = new OffcanvasToggleDirective(service);
    expect(directive).toBeTruthy();
  });
});
