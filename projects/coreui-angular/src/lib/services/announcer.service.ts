import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';

export type AnnouncePriority = 'assertive' | 'polite';

export interface AnnounceOptions {
  context?: Element | null;
  priority?: AnnouncePriority;
  timeout?: number;
}

interface PendingMessage {
  context: Element | null;
  node: HTMLElement;
  page: HTMLElement | null;
  priority: AnnouncePriority;
  timeout: number;
}

const ATTRIBUTE = 'data-coreui-live-announcer';
const FIRST_MESSAGE_DELAY = 100;
const PRIORITIES: AnnouncePriority[] = ['assertive', 'polite'];

const VISUALLY_HIDDEN: Partial<CSSStyleDeclaration> = {
  border: '0',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};

@Injectable({
  providedIn: 'root'
})
export class AnnouncerService {
  readonly #document = inject(DOCUMENT);
  readonly #ngZone = inject(NgZone);
  readonly #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly #pending: PendingMessage[] = [];
  readonly #readyAt = new WeakMap<Element, number>();

  /**
   * Reads a message to screen reader users. The message goes to a visually hidden live region at the start of
   * the page or, while a modal dialog leaves the rest of the page inert, to one inside that dialog.
   * A new region takes its first message 100 ms after it is created, and each call adds a new node,
   * so the same text is read again.
   * @param message - The text to read
   * @param options - `context` is the element the message comes from, `priority` picks the polite (default)
   * or the assertive region, `timeout` (ms) is how long the message stays, `0` keeps it
   * @returns A function that removes the message, or cancels it before it is added
   */
  announce(message: string, options: AnnounceOptions = {}): () => void {
    const document = this.#document;
    if (!this.#isBrowser || !document?.body || !message) {
      return () => undefined;
    }

    const { context = null, priority = 'polite', timeout = 7000 } = options;
    const node = document.createElement('div');
    node.textContent = message;
    const host = this.#getModal(context) ?? document.body;
    const announcer = this.#getAnnouncer(host);

    this.#pending.push({
      context,
      node,
      page: host === document.body ? announcer : null,
      priority: priority === 'assertive' ? 'assertive' : 'polite',
      timeout
    });
    this.#schedule(this.#waitFor(announcer));

    return () => {
      const index = this.#pending.findIndex((pending) => pending.node === node);
      if (index !== -1) {
        this.#pending.splice(index, 1);
      }
      node.remove();
    };
  }

  #schedule(delay: number): void {
    this.#ngZone.runOutsideAngular(() => setTimeout(() => this.#flush(), Math.max(0, delay)));
  }

  #waitFor(announcer: Element): number {
    return (this.#readyAt.get(announcer) ?? 0) - performance.now();
  }

  #flush(): void {
    const document = this.#document;
    while (this.#pending.length > 0) {
      const [{ context, node, page, priority, timeout }] = this.#pending;

      if (page && !page.isConnected) {
        this.#pending.shift();
        continue;
      }

      const announcer = this.#getAnnouncer(this.#getModal(context) ?? document.body);
      const wait = this.#waitFor(announcer);
      if (wait > 0) {
        this.#schedule(wait);
        return;
      }

      this.#pending.shift();
      announcer.querySelector(`[aria-live="${priority}"]`)?.append(node);

      if (timeout > 0 && Number.isFinite(timeout)) {
        this.#ngZone.runOutsideAngular(() => setTimeout(() => node.remove(), timeout));
      }
    }
  }

  #getAnnouncer(host: HTMLElement): HTMLElement {
    const existing = host.querySelector<HTMLElement>(`:scope > [${ATTRIBUTE}]`);
    if (existing) {
      if (!this.#readyAt.has(existing)) {
        this.#readyAt.set(existing, performance.now() + FIRST_MESSAGE_DELAY);
      }
      return existing;
    }

    const announcer = this.#document.createElement('div');
    announcer.setAttribute(ATTRIBUTE, '');
    Object.assign(announcer.style, VISUALLY_HIDDEN);

    for (const priority of PRIORITIES) {
      const region = this.#document.createElement('div');
      region.setAttribute('role', 'log');
      region.setAttribute('aria-live', priority);
      region.setAttribute('aria-relevant', 'additions');
      announcer.append(region);
    }

    if (host === this.#document.body) {
      host.prepend(announcer);
    } else {
      const onClose = (event: Event) => {
        if (event.target === host && !(host as HTMLDialogElement).open) {
          announcer.remove();
          host.removeEventListener('close', onClose);
        }
      };
      host.append(announcer);
      host.addEventListener('close', onClose);
    }

    this.#readyAt.set(announcer, performance.now() + FIRST_MESSAGE_DELAY);
    return announcer;
  }

  #getModal(context: Element | null): HTMLElement | null {
    let focused = this.#document.activeElement;
    while (focused?.shadowRoot?.activeElement) {
      focused = focused.shadowRoot.activeElement;
    }

    const modals = [...this.#document.querySelectorAll<HTMLElement>('dialog[open], [aria-modal="true"]')].filter(
      (element) => this.#isModal(element)
    );

    return this.#getDialogAround(focused) ?? this.#getDialogAround(context) ?? modals.at(-1) ?? null;
  }

  #getDialogAround(element: Element | null): HTMLElement | null {
    let node = element;
    while (node) {
      if (this.#isModal(node)) {
        return node as HTMLElement;
      }
      node = node.assignedSlot ?? node.parentElement ?? (node.getRootNode() as ShadowRoot).host ?? null;
    }
    return null;
  }

  #isModal(element: Element): boolean {
    if (element.matches('dialog[open]')) {
      try {
        return element.matches(':modal');
      } catch {
        return false;
      }
    }

    return (
      element.matches('[aria-modal="true"]') &&
      element.isConnected &&
      (typeof element.checkVisibility !== 'function' || element.checkVisibility())
    );
  }
}
