import { Component, DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';
import { ProgressBarDirective } from './progress-bar.directive';

@Component({
  template: ` <c-progress value="42" color="success" />`,
  selector: 'c-test',
  imports: [ProgressComponent]
})
export class TestComponent {}

describe('ProgressComponent', () => {
  let component: TestComponent;
  let progress: DebugNode | undefined;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, ProgressComponent, ProgressBarDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    progress = fixture.debugElement.childNodes.find((v) => ProgressComponent);
    // let x= fixture.debugElement.queryAll(By.directive(ProgressBarDirective))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(progress).toBeDefined();
  });

  it('should have css classes', () => {
    expect(progress?.nativeNode?.classList.contains('progress')).toBe(true);
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
