import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardImgDirective } from './card-img.directive';
import { By } from '@angular/platform-browser';

@Component({
  imports: [CardImgDirective],
  template: ` <div [cCardImg]="orientation"></div> `
})
export class TestComponent {
  orientation: 'top' | 'bottom' | 'start' | 'end' | undefined = undefined;
}

describe('CardImgDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(CardImgDirective));
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new CardImgDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    component.orientation = 'start';
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('rounded-start');
    component.orientation = 'end';
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('rounded-end');
    component.orientation = 'top';
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('card-img-top');
    component.orientation = 'bottom';
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('card-img-bottom');
  });
});
