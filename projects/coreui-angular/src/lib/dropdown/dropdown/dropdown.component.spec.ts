import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent, DropdownToggleDirective } from './dropdown.component';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { By } from '@angular/platform-browser';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('dropdown');
  });
});

class MockElementRef extends ElementRef {}

@Component({
  template: '<div cDropdownToggle></div>',
  standalone: true,
  imports: [DropdownToggleDirective]
})
class TestComponent {}

describe('DropdownToggleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;
  let service: DropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, DropdownToggleDirective],
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        DropdownService,
        DropdownComponent
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(DropdownToggleDirective));
    service = new DropdownService();

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownToggleDirective();
      expect(directive).toBeTruthy();
    });
  });
});
