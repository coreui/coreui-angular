import { DOCUMENT } from '@angular/core';
import { fakeAsync, flush, TestBed } from '@angular/core/testing';

import { BackdropService } from './backdrop.service';

describe('BackdropService', () => {
  let service: BackdropService;
  let document: Document;
  let backdrop: any;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackdropService);
    document = TestBed.inject(DOCUMENT);
    backdrop = null;
    backdrop = service.setBackdrop('modal');
    flush();
  }));

  afterEach(fakeAsync(() => {
    if (backdrop) {
      service.clearBackdrop(backdrop);
      flush();
    }
  }));

  it('should be created', () => {
    expect(backdrop).toBeTruthy();
    expect(service).toBeTruthy();
  });

  it('should set backdrop', fakeAsync(() => {
    expect(document.querySelector('.modal-backdrop')).not.toBeNull();
    expect(backdrop).toHaveClass('modal-backdrop');
    expect(backdrop).toHaveClass('fade');
    expect(backdrop).toHaveClass('show');
    service.clearBackdrop(service.activeBackdrop);
    flush();
    expect(backdrop).not.toHaveClass('show');
  }));

  it('should hide scrollbar', () => {
    service.hideScrollbar();
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('0px');
    expect(document.body.style.paddingLeft).toBe('');
    service.resetScrollbar();
  });

  it('should hide scrollbar for rtl', () => {
    document.body.setAttribute('dir', 'rtl');
    service.hideScrollbar();
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('');
    expect(document.body.style.paddingLeft).toBe('0px');
    service.resetScrollbar();
    document.body.removeAttribute('dir');
  });

  it('should reset scrollbar', () => {
    service.resetScrollbar();
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('should react to backdrop click', fakeAsync(() => {
    let backdropClicked = false;
    service.backdropClick$.subscribe((value) => {
      backdropClicked = true;
      expect(value).toBeTrue();
      service.clearBackdrop(service.activeBackdrop);
    });
    expect(backdropClicked).toBeFalse();
    expect(backdrop).toHaveClass('modal-backdrop');
    expect(backdrop).toHaveClass('fade');
    expect(backdrop).toHaveClass('show');
    backdrop.dispatchEvent(new MouseEvent('click'));
    flush();
    expect(backdropClicked).toBeTrue();
    expect(backdrop).toHaveClass('modal-backdrop');
    expect(backdrop).toHaveClass('fade');
    expect(backdrop).not.toHaveClass('show');
  }));
});
