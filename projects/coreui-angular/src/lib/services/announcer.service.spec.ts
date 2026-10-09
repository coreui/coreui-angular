import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AnnouncerService } from './announcer.service';

describe('AnnouncerService', () => {
  let service: AnnouncerService;

  const regions = (host: Element) => host.querySelector(':scope > [data-coreui-live-announcer]');
  const polite = (host: Element) => regions(host)?.querySelector('[aria-live="polite"]');

  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'performance'] });
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncerService);
  });

  afterEach(() => {
    document
      .querySelectorAll('[data-coreui-live-announcer], [aria-modal], dialog')
      .forEach((element) => element.remove());
    vi.useRealTimers();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('creates a visually hidden pair of log regions in body on the first message', () => {
    expect(regions(document.body)).toBeNull();
    service.announce('Saved');
    const announcer = regions(document.body) as HTMLElement;
    expect(announcer).not.toBeNull();
    expect(announcer.style.position).toBe('absolute');
    expect(announcer.style.width).toBe('1px');
    const logs = [...announcer.querySelectorAll('[role="log"]')];
    expect(logs.map((log) => log.getAttribute('aria-live'))).toEqual(['assertive', 'polite']);
    expect(logs.every((log) => log.getAttribute('aria-relevant') === 'additions')).toBe(true);
  });

  it('adds the first message of a new region after 100 ms', () => {
    service.announce('Saved');
    vi.advanceTimersByTime(99);
    expect(polite(document.body)?.textContent).toBe('');
    vi.advanceTimersByTime(1);
    expect(polite(document.body)?.textContent).toBe('Saved');
  });

  it('removes the message after its timeout, and reads the same text again as a new node', () => {
    service.announce('Saved', { timeout: 1000 });
    service.announce('Saved', { timeout: 1000 });
    vi.advanceTimersByTime(100);
    expect(polite(document.body)?.children.length).toBe(2);
    vi.advanceTimersByTime(1000);
    expect(polite(document.body)?.children.length).toBe(0);
  });

  it('keeps the message with a timeout of 0', () => {
    service.announce('Saved', { timeout: 0 });
    vi.advanceTimersByTime(10000);
    expect(polite(document.body)?.children.length).toBe(1);
  });

  it('puts assertive messages in the assertive region', () => {
    service.announce('Error', { priority: 'assertive' });
    vi.advanceTimersByTime(100);
    expect(regions(document.body)?.querySelector('[aria-live="assertive"]')?.textContent).toBe('Error');
  });

  it('cancels a message before it is added', () => {
    const cancel = service.announce('Saved');
    cancel();
    vi.advanceTimersByTime(100);
    expect(polite(document.body)?.textContent).toBe('');
  });

  it('announces inside the open aria-modal around the context', () => {
    const modal = document.createElement('div');
    modal.setAttribute('aria-modal', 'true');
    const context = document.createElement('span');
    modal.append(context);
    document.body.append(modal);

    service.announce('Removed', { context });
    vi.advanceTimersByTime(100);
    expect(polite(modal)?.textContent).toBe('Removed');
    expect(polite(document.body)?.textContent ?? '').toBe('');
  });

  it('announces inside the aria-modal that holds focus, without a context', () => {
    const modal = document.createElement('div');
    const later = document.createElement('div');
    modal.setAttribute('aria-modal', 'true');
    later.setAttribute('aria-modal', 'true');
    const button = document.createElement('button');
    modal.append(button);
    document.body.append(modal, later);
    button.focus();

    service.announce('Saved');
    vi.advanceTimersByTime(100);
    expect(polite(modal)?.textContent).toBe('Saved');
    expect(regions(later)).toBeNull();
  });

  it('announces inside the last open modal when neither focus nor context is in one', () => {
    const first = document.createElement('div');
    const last = document.createElement('div');
    first.setAttribute('aria-modal', 'true');
    last.setAttribute('aria-modal', 'true');
    document.body.append(first, last);

    service.announce('Saved');
    vi.advanceTimersByTime(100);
    expect(polite(last)?.textContent).toBe('Saved');
    expect(regions(first)).toBeNull();
  });

  it('does nothing for an empty message', () => {
    service.announce('');
    expect(regions(document.body)).toBeNull();
  });
});

describe('AnnouncerService on the server', () => {
  it('does nothing without a browser', () => {
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
    const service = TestBed.inject(AnnouncerService);
    service.announce('Saved');
    expect(document.querySelector('[data-coreui-live-announcer]')).toBeNull();
  });
});
