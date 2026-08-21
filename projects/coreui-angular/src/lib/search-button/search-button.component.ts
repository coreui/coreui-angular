import {
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  effect,
  input,
  output,
  signal,
  TemplateRef
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { TemplateIdDirective } from '../shared';
import {
  formatShortcutTokens,
  getPreferredShortcut,
  getPressedKeys,
  matchesShortcut,
  parseShortcut,
  shouldIgnoreShortcut
} from './search-button.utils';

@Component({
  selector: 'c-search-button',
  exportAs: 'cSearchButton',
  templateUrl: './search-button.component.html',
  imports: [NgTemplateOutlet],
  host: {
    style: 'display: contents',
    '(document:keydown)': 'onDocumentKeydown($event)',
    '(document:keyup)': 'onDocumentKeyup($event)',
    '(window:blur)': 'onWindowBlur()'
  }
})
export class SearchButtonComponent {
  /**
   * Toggle the disabled state for the component.
   * @returns boolean
   * @default false
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * Placeholder content rendered inside `.search-button-placeholder`.
   * @returns string
   * @default 'Search'
   */
  readonly placeholder = input('Search');

  /**
   * Prevent the browser's default behavior when the configured shortcut matches.
   * @returns boolean
   * @default true
   */
  readonly preventDefault = input(true, { transform: booleanAttribute });

  /**
   * Comma-separated shortcut list. The component matches all configured shortcuts and renders the platform-preferred one.
   * @returns string
   * @default 'meta+/,ctrl+/'
   */
  readonly shortcut = input('meta+/,ctrl+/');

  /**
   * Event emitted when the component is activated by click or keyboard shortcut.
   */
  readonly trigger = output<void>();

  protected readonly contentTemplates = contentChildren(TemplateIdDirective, { descendants: true });

  protected readonly templates = computed(() => {
    return this.contentTemplates().reduce(
      (acc, child) => {
        acc[child.id] = child.templateRef;
        return acc;
      },
      {} as Record<string, TemplateRef<any>>
    );
  });

  protected readonly activeKeys = signal<string[]>([]);

  protected readonly shortcuts = computed(() => parseShortcut(this.shortcut()));

  protected readonly preferredShortcut = computed(() => getPreferredShortcut(this.shortcuts()));

  protected readonly shortcutTokens = computed(() => formatShortcutTokens(this.preferredShortcut()?.shortcut || ''));

  readonly #disabledActiveKeysEffect = effect(() => {
    if (this.disabled()) {
      this.activeKeys.set([]);
    }
  });

  protected onClick(): void {
    this.trigger.emit();
  }

  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (this.disabled()) {
      return;
    }

    this.activeKeys.set(Array.from(getPressedKeys(event)));
    this.handleShortcut(event);
  }

  protected onDocumentKeyup(event: KeyboardEvent): void {
    if (this.disabled()) {
      return;
    }

    this.activeKeys.set(Array.from(getPressedKeys(event)));
  }

  protected onWindowBlur(): void {
    this.activeKeys.set([]);
  }

  private handleShortcut(event: KeyboardEvent): void {
    if (event.defaultPrevented || event.repeat || shouldIgnoreShortcut(event)) {
      return;
    }

    const matchedShortcut = this.shortcuts().find((shortcut) => matchesShortcut(shortcut, event));

    if (!matchedShortcut) {
      return;
    }

    if (this.preventDefault()) {
      event.preventDefault();
    }

    this.trigger.emit();
  }
}
