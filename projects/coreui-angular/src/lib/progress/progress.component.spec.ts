import { Component, DebugNode } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';
import { ProgressBarDirective } from './progress-bar.directive';
import { ProgressStackedComponent } from './progress-stacked.component';

@Component({
  template: `
    <c-progress value="42" color="success" />`,
  selector: 'c-test',
  imports: [
    ProgressComponent,
    ProgressStackedComponent
  ],
  standalone: true
})
export class TestComponent {}

describe('ProgressComponent', () => {
  let component: TestComponent;
  let progress: DebugNode | undefined;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ProgressComponent, ProgressBarDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);

    component = fixture.componentInstance;
    progress = fixture.debugElement.childNodes.find(v => ProgressComponent);
    // let x= fixture.debugElement.queryAll(By.directive(ProgressBarDirective))
    // console.log(x)
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
    expect(progress).toBeDefined();
  });

  it('should have css classes', () => {
    expect(progress?.nativeNode).toHaveClass('progress');
  });

  it('should have style width %', () => {
    expect(progress?.nativeNode.style.width).toBe('');
  });

  it('should have aria-* attributes', () => {
    expect(progress?.nativeNode.getAttribute('aria-valuenow')).toBe('42');
    expect(progress?.nativeNode.getAttribute('aria-valuemin')).toBe('0');
    expect(progress?.nativeNode.getAttribute('aria-valuemax')).toBe('100');
  });
});
