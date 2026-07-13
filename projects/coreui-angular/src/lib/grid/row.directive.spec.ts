import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RowDirective } from './row.directive';
import { By } from '@angular/platform-browser';

@Component({
  imports: [RowDirective],
  template: ` <div id="row0" cRow xs="auto" [md]="7"></div> `
})
export class TestComponent {}

describe('RowDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new RowDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css class', () => {
    debugElement = fixture.debugElement.query(By.css('#row0'));
    expect(debugElement.nativeElement).toHaveClass('row');
    expect(debugElement.nativeElement).toHaveClass('row-cols-auto');
    expect(debugElement.nativeElement).toHaveClass('row-cols-md-7');
  });
});
