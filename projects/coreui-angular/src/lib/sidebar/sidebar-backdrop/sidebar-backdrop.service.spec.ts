/// <reference types="vitest/globals" />
import { TestBed } from '@angular/core/testing';
import { DOCUMENT, Renderer2, RendererFactory2 } from '@angular/core';
import { vi } from 'vitest';

import { SidebarBackdropService } from './sidebar-backdrop.service';
import { SidebarService } from '../sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

describe('SidebarBackdropService', () => {
  let service: SidebarBackdropService;
  let document: Document;
  let renderer: Renderer2;
  let sidebarService: SidebarService;
  let mockSidebar: Partial<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarBackdropService);
    document = TestBed.inject(DOCUMENT);
    const rendererFactory = TestBed.inject(RendererFactory2);
    renderer = rendererFactory.createRenderer(null, null);
    service.renderer = renderer;
    sidebarService = TestBed.inject(SidebarService);

    mockSidebar = {
      sidebarState: {
        mobile: false,
        visible: false
      }
    } as any;
  });

  afterEach(() => {
    const backdrop = document.querySelector('.sidebar-backdrop');
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create backdrop element when setBackdrop is called', () => {
    expect(document.querySelector('.sidebar-backdrop')).toBeNull();
    service.setBackdrop(mockSidebar as SidebarComponent);
    expect(document.querySelector('.sidebar-backdrop')).not.toBeNull();
  });

  it('should not create multiple backdrop elements', () => {
    service.setBackdrop(mockSidebar as SidebarComponent);
    const firstBackdrop = document.querySelector('.sidebar-backdrop');
    service.setBackdrop(mockSidebar as SidebarComponent);
    const secondBackdrop = document.querySelector('.sidebar-backdrop');
    expect(firstBackdrop).toBe(secondBackdrop);
    expect(document.querySelectorAll('.sidebar-backdrop').length).toBe(1);
  });

  it('should add show and fade classes when sidebar is mobile and visible', () => {
    mockSidebar.sidebarState = {
      mobile: true,
      visible: true
    };
    service.setBackdrop(mockSidebar as SidebarComponent);
    const backdrop = document.querySelector('.sidebar-backdrop');
    expect(backdrop?.classList.contains('fade')).toBe(true);
    expect(backdrop?.classList.contains('show')).toBe(true);
  });

  it('should not add show and fade classes when sidebar is not mobile', () => {
    mockSidebar.sidebarState = {
      mobile: false,
      visible: true
    };
    service.setBackdrop(mockSidebar as SidebarComponent);
    const backdrop = document.querySelector('.sidebar-backdrop');
    expect(backdrop?.classList.contains('fade')).toBe(false);
    expect(backdrop?.classList.contains('show')).toBe(false);
  });

  it('should not add show and fade classes when sidebar is not visible', () => {
    mockSidebar.sidebarState = {
      mobile: true,
      visible: false
    };
    service.setBackdrop(mockSidebar as SidebarComponent);
    const backdrop = document.querySelector('.sidebar-backdrop');
    expect(backdrop?.classList.contains('fade')).toBe(false);
    expect(backdrop?.classList.contains('show')).toBe(false);
  });

  it('should remove show and fade classes when sidebar state changes', () => {
    mockSidebar.sidebarState = {
      mobile: true,
      visible: true
    };
    service.setBackdrop(mockSidebar as SidebarComponent);
    let backdrop = document.querySelector('.sidebar-backdrop');
    expect(backdrop?.classList.contains('show')).toBe(true);

    mockSidebar.sidebarState = {
      mobile: false,
      visible: false
    };
    service.setBackdrop(mockSidebar as SidebarComponent);
    backdrop = document.querySelector('.sidebar-backdrop');
    expect(backdrop?.classList.contains('show')).toBe(false);
    expect(backdrop?.classList.contains('fade')).toBe(false);
  });

  it('should toggle sidebar when backdrop is clicked', () => {
    const toggleSpy = vi.spyOn(sidebarService, 'toggle');
    service.setBackdrop(mockSidebar as SidebarComponent);
    const backdrop = document.querySelector('.sidebar-backdrop');
    backdrop?.dispatchEvent(new MouseEvent('click'));
    expect(toggleSpy).toHaveBeenCalledTimes(1);
    expect(toggleSpy).toHaveBeenCalledWith({ toggle: 'visible', sidebar: mockSidebar });
  });

  it('should clear backdrop element when clearBackdrop is called', () => {
    service.setBackdrop(mockSidebar as SidebarComponent);
    expect(document.querySelector('.sidebar-backdrop')).not.toBeNull();
    service.clearBackdrop();
    expect(document.querySelector('.sidebar-backdrop')).toBeNull();
  });

  it('should handle clearBackdrop when backdrop does not exist', () => {
    expect(document.querySelector('.sidebar-backdrop')).toBeNull();
    expect(() => service.clearBackdrop()).not.toThrow();
    expect(document.querySelector('.sidebar-backdrop')).toBeNull();
  });

  it('should remove click listener when clearBackdrop is called', () => {
    const toggleSpy = vi.spyOn(sidebarService, 'toggle');
    service.setBackdrop(mockSidebar as SidebarComponent);
    service.clearBackdrop();

    // Try to dispatch event on removed backdrop - should not throw
    expect(() => {
      const backdrop = document.querySelector('.sidebar-backdrop');
      backdrop?.dispatchEvent(new MouseEvent('click'));
    }).not.toThrow();

    // Toggle should not be called since backdrop and listener are gone
    expect(toggleSpy).not.toHaveBeenCalled();
  });
});
