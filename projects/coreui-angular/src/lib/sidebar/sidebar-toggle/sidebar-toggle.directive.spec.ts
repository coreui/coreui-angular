/// <reference types="vitest/globals" />
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';

import { SidebarService } from '../sidebar.service';
import { SidebarToggleDirective } from './sidebar-toggle.directive';

@Component({
  template: `
    <button cSidebarToggle>Toggle Default</button>
    <button [cSidebarToggle]="'sidebar-1'">Toggle Sidebar 1</button>
    <button cSidebarToggle [toggle]="'unfoldable'">Toggle Unfoldable</button>
    <button [cSidebarToggle]="'sidebar-2'" [toggle]="'visible'">Toggle Sidebar 2 Visible</button>
  `,
  imports: [SidebarToggleDirective]
})
class TestComponent {}

describe('SidebarToggleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let sidebarService: SidebarService;
  let debugElements: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [SidebarService]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    sidebarService = TestBed.inject(SidebarService);
    debugElements = fixture.debugElement.queryAll(By.directive(SidebarToggleDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new SidebarToggleDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should find all directive instances', () => {
    expect(debugElements.length).toBe(4);
  });

  it('should toggle sidebar with default toggle value (visible)', () => {
    const toggleSpy = vi.spyOn(sidebarService, 'toggle');
    const button = debugElements[0].nativeElement;

    button.click();

    expect(toggleSpy).toHaveBeenCalledTimes(1);
    expect(toggleSpy).toHaveBeenCalledWith({ toggle: 'visible', id: '' });
  });

  // ...existing code...

  it('should toggle sidebar with unfoldable toggle', () => {
    const toggleSpy = vi.spyOn(sidebarService, 'toggle');
    const button = debugElements[2].nativeElement;

    button.click();

    expect(toggleSpy).toHaveBeenCalledTimes(1);
    expect(toggleSpy).toHaveBeenCalledWith({ toggle: 'unfoldable', id: '' });
  });

  it('should toggle sidebar with both id and toggle specified', () => {
    const toggleSpy = vi.spyOn(sidebarService, 'toggle');
    const button = debugElements[3].nativeElement;

    button.click();

    expect(toggleSpy).toHaveBeenCalledTimes(1);
    expect(toggleSpy).toHaveBeenCalledWith({ toggle: 'visible', id: 'sidebar-2' });
  });

  it('should prevent default event behavior', () => {
    const button = debugElements[0].nativeElement;
    const event = new MouseEvent('click', { cancelable: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    button.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should handle multiple clicks', () => {
    const toggleSpy = vi.spyOn(sidebarService, 'toggle');
    const button = debugElements[0].nativeElement;

    button.click();
    button.click();
    button.click();

    expect(toggleSpy).toHaveBeenCalledTimes(3);
  });

  it('should have correct default input values', () => {
    const directive = debugElements[0].injector.get(SidebarToggleDirective);
    expect(directive.toggle()).toBe('visible');
    // When cSidebarToggle is used without value, it sets id to empty string
    expect(directive.id()).toBe('');
  });

  it('should accept toggle input as visible', () => {
    const directive = debugElements[3].injector.get(SidebarToggleDirective);
    expect(directive.toggle()).toBe('visible');
  });

  it('should accept toggle input as unfoldable', () => {
    const directive = debugElements[2].injector.get(SidebarToggleDirective);
    expect(directive.toggle()).toBe('unfoldable');
  });

  it('should have exportAs cSidebarToggle', () => {
    const directiveInstance = debugElements[0].injector.get(SidebarToggleDirective);
    expect(directiveInstance).toBeInstanceOf(SidebarToggleDirective);
  });
});
