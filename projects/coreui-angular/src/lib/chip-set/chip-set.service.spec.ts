import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { ChipComponent } from '../chip/chip.component';
import { ChipSetService, ChipSetHost } from './chip-set.service';
import { ChipSelectionMode } from './chip-set.types';

describe('ChipSetService', () => {
  let service: ChipSetService;
  const selected = signal<string[]>([]);
  const selectionMode = signal<ChipSelectionMode>('multiple');
  const chip = (identity: string) => ({ identity: () => identity }) as ChipComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ChipSetService] });
    service = TestBed.inject(ChipSetService);
    selected.set([]);
    selectionMode.set('multiple');
    service.attach({
      ariaAddedAnnouncement: signal('added'),
      ariaRemoveLabel: signal('Remove'),
      ariaRemovedAnnouncement: signal('removed'),
      disabled: signal(false),
      element: document.createElement('div'),
      filter: signal(false),
      initialStop: 'first',
      isListbox: signal(true),
      removable: signal(false),
      removeIcon: signal(undefined),
      selectable: signal(true),
      selected,
      selectedIcon: signal(undefined),
      selectionMode,
      focusFallback: vi.fn(),
      removeRequested: vi.fn()
    } satisfies ChipSetHost);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('exposes the options of the set to its chips', () => {
    expect(service.isListbox()).toBe(true);
    expect(service.selectable()).toBe(true);
    expect(service.ariaRemoveLabel()).toBe('Remove');
  });

  it('toggles values in multiple mode', () => {
    service.toggle(chip('a'), true);
    service.toggle(chip('b'), true);
    service.toggle(chip('a'), false);
    expect(selected()).toEqual(['b']);
    expect(service.isSelected('b')).toBe(true);
  });

  it('keeps only the newest value in single mode', () => {
    selectionMode.set('single');
    service.toggle(chip('a'), true);
    service.toggle(chip('b'), true);
    expect(selected()).toEqual(['b']);
  });

  it('gives no tab index to a chip it does not hold', () => {
    expect(service.tabIndexFor(chip('a'))).toBeNull();
  });
});
