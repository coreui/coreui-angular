/// <reference types="vitest/globals" />
import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BackdropService } from './backdrop.service';

describe('BackdropService', () => {
  let service: BackdropService;
  let document: Document;
  let backdrop: any;

  beforeEach(async () => {
    vi.useFakeTimers();
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackdropService);
    document = TestBed.inject(DOCUMENT);
    backdrop = null;
    backdrop = service.setBackdrop('modal');
    await vi.runAllTimersAsync();
  });

  afterEach(async () => {
    if (backdrop) {
      service.clearBackdrop(backdrop);
      await vi.runAllTimersAsync();
    }
    vi.useRealTimers();
  });

  it('should be created', () => {
    expect(backdrop).toBeTruthy();
    expect(service).toBeTruthy();
  });

  it('should set backdrop', async () => {
    expect(document.querySelector('.modal-backdrop')).not.toBeNull();
    expect(backdrop.classList.contains('modal-backdrop')).toBe(true);
    expect(backdrop.classList.contains('fade')).toBe(true);
    expect(backdrop.classList.contains('show')).toBe(true);
    service.clearBackdrop(service.activeBackdrop);
    await vi.runAllTimersAsync();
    expect(backdrop.classList.contains('show')).toBe(false);
  });

  it('should hide scrollbar', () => {
    service.hideScrollbar();
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toContain('px');
    expect(document.body.style.paddingLeft).toBe('');
    service.resetScrollbar();
  });

  it('should hide scrollbar for rtl', async () => {
    document.body.setAttribute('dir', 'rtl');
    service.hideScrollbar();
    await vi.runAllTimersAsync();
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('');
    expect(document.body.style.paddingLeft).toContain('px');
    service.resetScrollbar();
    document.body.removeAttribute('dir');
  });

  it('should reset scrollbar', () => {
    service.resetScrollbar();
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('should react to backdrop click', async () => {
    let backdropClicked = false;
    service.backdropClick$.subscribe((value) => {
      backdropClicked = true;
      expect(value).toBe(true);
      service.clearBackdrop(service.activeBackdrop);
    });
    expect(backdropClicked).toBe(false);
    expect(backdrop.classList.contains('modal-backdrop')).toBe(true);
    expect(backdrop.classList.contains('fade')).toBe(true);
    expect(backdrop.classList.contains('show')).toBe(true);
    backdrop.dispatchEvent(new MouseEvent('click'));
    await vi.runAllTimersAsync();
    expect(backdropClicked).toBe(true);
    expect(backdrop.classList.contains('modal-backdrop')).toBe(true);
    expect(backdrop.classList.contains('fade')).toBe(true);
    expect(backdrop.classList.contains('show')).toBe(false);
  });
});
