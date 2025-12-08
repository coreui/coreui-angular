import { Component, DebugElement, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardImgDirective } from './card-img.directive';
import { By } from '@angular/platform-browser';

@Component({
  imports: [CardImgDirective],
  template: ` <div [cCardImg]="orientation()"></div> `
})
export class TestComponent {
  readonly orientation = input<'top' | 'bottom' | 'start' | 'end' | undefined>(undefined);
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
    fixture.componentRef.setInput('orientation', 'start');
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('rounded-start');
    fixture.componentRef.setInput('orientation', 'end');
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('rounded-end');
    fixture.componentRef.setInput('orientation', 'top');
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('card-img-top');
    fixture.componentRef.setInput('orientation', 'bottom');
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('card-img-bottom');
  });
});
