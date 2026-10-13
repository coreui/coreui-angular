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

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(VisibleDirective));
    await fixture.whenStable();
  });

  it('should display the content when cVisible is true', async () => {
    component.visible.set(true);
    await fixture.whenStable();
    const content = fixture.nativeElement.textContent.trim();
    expect(content).toBe('Test Node');
  });

  it('should not display the content when cVisible is false', async () => {
    component.visible.set(false);
    await fixture.whenStable();
    const content = fixture.nativeElement.textContent.trim();
    expect(content).toBe('');
  });

  it('should toggle visibility when cVisible changes from true to false', async () => {
    component.visible.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent.trim()).toBe('Test Node');

    component.visible.set(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent.trim()).toBe('');
  });

  it('should toggle visibility when cVisible changes from false to true', async () => {
    component.visible.set(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent.trim()).toBe('');

    component.visible.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent.trim()).toBe('Test Node');
  });
});
