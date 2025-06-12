import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { VisibleDirective } from './visible.directive';

@Component({
  imports: [VisibleDirective],
  template: '<ng-template [cVisible]="visible()">Test Node</ng-template>'
})
class TestComponent {
  readonly visible = signal(true);
}

describe('VisibleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(VisibleDirective));
    fixture.detectChanges();
  });

  it('should display the content when cVisible is true', () => {
    component.visible.set(true);
    fixture.detectChanges();
    const content = fixture.nativeElement.textContent.trim();
    expect(content).toBe('Test Node');
  });

  it('should not display the content when cVisible is false', () => {
    component.visible.set(false);
    fixture.detectChanges();
    const content = fixture.nativeElement.textContent.trim();
    expect(content).toBe('');
  });

  it('should toggle visibility when cVisible changes from true to false', () => {
    component.visible.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim()).toBe('Test Node');

    component.visible.set(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim()).toBe('');
  });

  it('should toggle visibility when cVisible changes from false to true', () => {
    component.visible.set(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim()).toBe('');

    component.visible.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim()).toBe('Test Node');
  });
});
