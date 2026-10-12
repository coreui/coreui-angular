import { inputBinding } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SidebarService } from '../sidebar.service';
import { SidebarTogglerDirective } from './sidebar-toggler.directive';

describe('SidebarTogglerDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(SidebarTogglerDirective, { tagName: 'button' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css class, role and styles', () => {
    const fixture = TestBed.createDirective(SidebarTogglerDirective, { tagName: 'button' });
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.classList.contains('sidebar-toggler')).toBe(true);
    expect(element.getAttribute('role')).toBe('button');
    expect(element.style.cursor).toBe('pointer');
  });

  it('should toggle the sidebar on click', () => {
    const fixture = TestBed.createDirective(SidebarTogglerDirective, {
      tagName: 'button',
      bindings: [inputBinding('cSidebarToggler', () => 'sidebar-1'), inputBinding('toggle', () => 'unfoldable')]
    });
    fixture.detectChanges();
    const toggle = vi.spyOn(TestBed.inject(SidebarService), 'toggle');
    (fixture.nativeElement as HTMLElement).click();
    expect(toggle).toHaveBeenCalledWith({ toggle: 'unfoldable', id: 'sidebar-1' });
  });
});
