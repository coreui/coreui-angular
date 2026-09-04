import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NavGroupComponent } from './nav-group.component';
import { NavGroupService } from './nav-group.service';

@Component({
  template: `
    <c-nav-group toggler="A">
      <c-nav-group toggler="A1" />
    </c-nav-group>
    <c-nav-group toggler="B" />
  `,
  imports: [NavGroupComponent],
  providers: [NavGroupService]
})
class TestComponent {}

describe('NavGroupComponent', () => {
  let component: NavGroupComponent;
  let fixture: ComponentFixture<NavGroupComponent>;
  let componentRef: ComponentRef<NavGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavGroupComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('nav-group')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should render toggler', () => {
    expect(fixture.nativeElement.querySelector('.nav-group-toggle')).toBeNull();
    componentRef.setInput('toggler', 'anchorText');
    fixture.detectChanges();
    const toggler = fixture.nativeElement.querySelector('.nav-group-toggle');
    expect(toggler.classList.contains('nav-link')).toBe(true);
    expect(toggler.textContent.trim()).toBe('anchorText');
    expect(toggler.getAttribute('aria-expanded')).toBe('false');
  });

  it('should toggle its own visibility', () => {
    componentRef.setInput('toggler', 'anchorText');
    fixture.detectChanges();
    const toggler = fixture.nativeElement.querySelector('.nav-group-toggle');

    toggler.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);

    toggler.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should emit visibleChange on toggle', () => {
    const visibleChange = vi.fn();
    componentRef.setInput('toggler', 'anchorText');
    component.visibleChange.subscribe(visibleChange);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.nav-group-toggle').click();
    expect(visibleChange).toHaveBeenCalledWith(true);
  });

  it('should follow the visible input', () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);

    componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should keep the items displayed while collapsing', () => {
    componentRef.setInput('toggler', 'anchorText');
    fixture.detectChanges();
    const toggler = fixture.nativeElement.querySelector('.nav-group-toggle');

    toggler.click();
    fixture.detectChanges();
    component.onCollapseChange('open');
    expect(component.display()).toBeNull();

    toggler.click();
    expect(component.display()).toBe('block');
  });
});

describe('NavGroupComponent accordion', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should collapse the sibling group on open', () => {
    const groups = fixture.nativeElement.querySelectorAll('c-nav-group');
    const [groupA, , groupB] = groups;
    const togglerA = groupA.querySelector('.nav-group-toggle');
    const togglerB = groupB.querySelector('.nav-group-toggle');

    togglerA.click();
    fixture.detectChanges();
    expect(groupA.classList.contains('show')).toBe(true);
    expect(groupB.classList.contains('show')).toBe(false);

    togglerB.click();
    fixture.detectChanges();
    expect(groupA.classList.contains('show')).toBe(false);
    expect(groupB.classList.contains('show')).toBe(true);
  });

  it('should keep the items displayed when a sibling collapses it', () => {
    const [groupA, , groupB] = fixture.nativeElement.querySelectorAll('c-nav-group');
    const instanceA = fixture.debugElement.queryAll(By.directive(NavGroupComponent))[0]
      .componentInstance as NavGroupComponent;

    groupA.querySelector('.nav-group-toggle').click();
    fixture.detectChanges();
    instanceA.onCollapseChange('open');
    expect(instanceA.display()).toBeNull();

    groupB.querySelector('.nav-group-toggle').click();
    expect(instanceA.display()).toBe('block');
  });

  it('should restore the nested group state on reopen', () => {
    const [groupA, groupA1] = fixture.nativeElement.querySelectorAll('c-nav-group');
    const togglerA = groupA.querySelector('.nav-group-toggle');
    const togglerA1 = groupA1.querySelector('.nav-group-toggle');

    togglerA.click();
    fixture.detectChanges();
    togglerA1.click();
    fixture.detectChanges();
    expect(groupA1.classList.contains('show')).toBe(true);

    togglerA.click();
    fixture.detectChanges();
    expect(groupA.classList.contains('show')).toBe(false);

    togglerA.click();
    fixture.detectChanges();
    expect(groupA.classList.contains('show')).toBe(true);
    expect(groupA1.classList.contains('show')).toBe(true);
  });
});
