import { DOCUMENT } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { BackdropService } from './backdrop.service';

describe('BackdropService', () => {
  let service: BackdropService;
  let document: Document;
  let backdrop: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackdropService);
    document = TestBed.inject(DOCUMENT);
  });

  afterAll(() => {
    expect(document.querySelector('.modal-backdrop')).toBeNull();
  }, 500);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set backdrop', fakeAsync(() => {
    // expect(service.scrollbarWidth).toBe('0px');
    expect(document.querySelector('.modal-backdrop')).toBeNull();
    backdrop = service.setBackdrop();
    tick();
    expect(document.querySelector('.modal-backdrop')).not.toBeNull();
    expect(backdrop).toHaveClass('modal-backdrop');
    expect(backdrop).toHaveClass('fade');
    expect(backdrop).toHaveClass('show');
    service.clearBackdrop(backdrop);
    expect(backdrop).not.toHaveClass('show');
    expect(document.querySelector('.modal-backdrop')).not.toBeNull();
  }));

  it('should hide scrollbar', () => {
    service.hideScrollbar();
    expect(document.body.style.overflow).toBe('hidden');
    // expect(document.body.style.paddingRight).toBe('0px');
  });

  it('should reset scrollbar', () => {
    service.resetScrollbar();
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('should react to backdrop click', fakeAsync(() => {
    backdrop = service.setBackdrop();
    tick();
    service.backdropClick$.subscribe((value) => {
      expect(value).toBeTrue();
    });
    backdrop.dispatchEvent(new MouseEvent('click'));
    service.clearBackdrop(backdrop);
  }));
});
