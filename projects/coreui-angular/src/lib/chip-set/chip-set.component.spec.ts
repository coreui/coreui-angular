import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from '../chip/chip.component';
import { AnnouncerService } from '../services/announcer.service';
import { ChipSetComponent } from './chip-set.component';
import { ChipItem, ChipSelectionMode } from './chip-set.types';

const KEY_CODES: Record<string, number> = {
  ArrowLeft: 37,
  ArrowRight: 39,
  Backspace: 8,
  Delete: 46,
  End: 35,
  Enter: 13,
  Home: 36
};

const press = (target: Element, key: string) =>
  target.dispatchEvent(new KeyboardEvent('keydown', { key, keyCode: KEY_CODES[key], bubbles: true, cancelable: true }));

@Component({
  imports: [ChipSetComponent, ChipComponent],
  template: `
    <div [attr.dir]="dir()">
      <c-chip-set
        aria-label="Tags"
        [ariaAddedAnnouncement]="added()"
        [ariaRemoveLabel]="removeLabel()"
        [ariaRemovedAnnouncement]="removedText()"
        [chips]="chips()"
        [disabled]="disabled()"
        [filter]="filter()"
        [removable]="removable()"
        [removeIcon]="customIcons() ? removeTpl : undefined"
        [selectable]="selectable()"
        [selectedIcon]="customIcons() ? checkTpl : undefined"
        [selectionMode]="mode()"
        [(selected)]="selected"
        (chipsChange)="chipsChanges.push($event)"
        (remove)="removed.push($event)"
      >
        @for (chip of declared(); track chip.key) {
          <c-chip
            [disabled]="chip.disabled"
            [removable]="chip.removable"
            [selectable]="chip.selectable"
            [value]="chip.value"
            >{{ chip.label ?? chip.value }}</c-chip
          >
        }
      </c-chip-set>
    </div>
    <button id="outside">Outside</button>
    <ng-template #checkTpl><b class="custom-check">✓</b></ng-template>
    <ng-template #removeTpl><b class="custom-remove">×</b></ng-template>
  `
})
class ChipSetHostComponent {
  readonly added = signal('added');
  readonly chips = signal<(string | ChipItem)[] | undefined>(undefined);
  readonly customIcons = signal(false);
  readonly declared = signal<
    { key: unknown; value?: string; label?: string; disabled?: boolean; removable?: boolean; selectable?: boolean }[]
  >([]);
  readonly dir = signal<string | null>(null);
  readonly disabled = signal(false);
  readonly filter = signal(false);
  readonly mode = signal<ChipSelectionMode>('multiple');
  readonly removable = signal(false);
  readonly removedText = signal('removed');
  readonly removeLabel = signal('Remove');
  readonly selectable = signal(false);
  readonly selected = signal<string[]>([]);
  readonly chipsChanges: (string | ChipItem)[][] = [];
  readonly removed: string[] = [];

  declare(...values: string[]) {
    this.declared.set(values.map((value) => ({ key: {}, value })));
  }
}

describe('ChipSetComponent', () => {
  let fixture: ComponentFixture<ChipSetHostComponent>;
  let host: ChipSetHostComponent;
  let set: HTMLElement;
  let announce: ReturnType<typeof vi.spyOn>;

  const chips = () => [...set.querySelectorAll<HTMLElement>('c-chip')];
  const chip = (text: string) => chips().find((element) => element.textContent?.includes(text))!;
  const stops = () => chips().filter((element) => element.getAttribute('tabindex') === '0');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipSetHostComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
    announce = vi.spyOn(TestBed.inject(AnnouncerService), 'announce').mockReturnValue(vi.fn());
    fixture = TestBed.createComponent(ChipSetHostComponent);
    host = fixture.componentInstance;
    set = fixture.nativeElement.querySelector('c-chip-set');
  });

  afterEach(() => {
    document.documentElement.removeAttribute('dir');
    vi.restoreAllMocks();
  });

  it('loads and displays ChipSet component', async () => {
    host.declare('a', 'b');
    await fixture.whenStable();
    expect(set.classList.contains('chip-set')).toBe(true);
    expect(set.getAttribute('role')).toBe('group');
    expect(chips().length).toBe(2);
  });

  it('ChipSet passes selectable down to its chips', async () => {
    host.selectable.set(true);
    host.declare('a', 'b');
    await fixture.whenStable();
    expect(set.getAttribute('role')).toBe('listbox');
    expect(set.getAttribute('aria-orientation')).toBe('horizontal');
    expect(set.getAttribute('aria-multiselectable')).toBe('true');
    chips().forEach((element) => {
      expect(element.getAttribute('role')).toBe('option');
      expect(element.getAttribute('aria-selected')).toBe('false');
    });
  });

  it('ChipSet allows multiple selected chips by default', async () => {
    host.selectable.set(true);
    host.declare('a', 'b', 'c');
    await fixture.whenStable();
    chip('a').click();
    chip('c').click();
    await fixture.whenStable();
    expect(host.selected()).toEqual(['a', 'c']);
    expect(chip('a').getAttribute('aria-selected')).toBe('true');
    expect(chip('b').getAttribute('aria-selected')).toBe('false');
  });

  it('ChipSet deselects siblings in single selection mode', async () => {
    host.selectable.set(true);
    host.mode.set('single');
    host.declare('a', 'b');
    await fixture.whenStable();
    expect(set.getAttribute('aria-multiselectable')).toBeNull();
    chip('a').click();
    chip('b').click();
    await fixture.whenStable();
    expect(host.selected()).toEqual(['b']);
    expect(chip('a').getAttribute('aria-selected')).toBe('false');
    expect(chip('b').getAttribute('aria-selected')).toBe('true');
  });

  it('ChipSet honors a controlled selected', async () => {
    host.selectable.set(true);
    host.selected.set(['b']);
    host.declare('a', 'b');
    await fixture.whenStable();
    expect(chip('b').classList.contains('active')).toBe(true);
    expect(chip('a').classList.contains('active')).toBe(false);
  });

  it('ChipSet forwards filter so a selected chip shows a check icon', async () => {
    host.filter.set(true);
    host.selected.set(['a']);
    host.declare('a', 'b');
    await fixture.whenStable();
    expect(chip('a').querySelector('.chip-check')).not.toBeNull();
    expect(chip('b').querySelector('.chip-check')).toBeNull();
  });

  it('ChipSet moves focus between chips with the keyboard', async () => {
    host.selectable.set(true);
    host.declare('a', 'b', 'c');
    await fixture.whenStable();
    chip('a').focus();
    press(chip('a'), 'ArrowRight');
    expect(document.activeElement).toBe(chip('b'));
    press(chip('b'), 'End');
    expect(document.activeElement).toBe(chip('c'));
    press(chip('c'), 'ArrowRight');
    expect(document.activeElement).toBe(chip('c'));
    press(chip('c'), 'Home');
    expect(document.activeElement).toBe(chip('a'));
    press(chip('a'), 'ArrowLeft');
    expect(document.activeElement).toBe(chip('a'));
  });

  it('ChipSet mirrors arrow keys in RTL', async () => {
    host.selectable.set(true);
    host.dir.set('rtl');
    host.declare('a', 'b');
    await fixture.whenStable();
    chip('a').focus();
    press(chip('a'), 'ArrowLeft');
    expect(document.activeElement).toBe(chip('b'));
    press(chip('b'), 'ArrowRight');
    expect(document.activeElement).toBe(chip('a'));
  });

  it('ChipSet keeps arrow keys in an LTR island on an RTL page', async () => {
    document.documentElement.dir = 'rtl';
    host.selectable.set(true);
    host.dir.set('ltr');
    host.declare('a', 'b');
    await fixture.whenStable();
    chip('a').focus();
    press(chip('a'), 'ArrowRight');
    expect(document.activeElement).toBe(chip('b'));
    press(chip('b'), 'ArrowLeft');
    expect(document.activeElement).toBe(chip('a'));
  });

  it('ChipSet fires remove so the parent can drop the chip', async () => {
    host.removable.set(true);
    host.chips.set(['a', 'b']);
    await fixture.whenStable();
    chip('a').querySelector<HTMLButtonElement>('.chip-remove')!.click();
    await fixture.whenStable();
    expect(host.removed).toEqual(['a']);
    expect(host.chipsChanges).toEqual([['b']]);
    expect(chips().length).toBe(2);
  });

  it('ChipSet renders chips from the chips input (strings and objects)', async () => {
    host.chips.set(['a', { value: 'ng', label: 'Angular', color: 'primary' }, 'a']);
    await fixture.whenStable();
    expect(chips().map((element) => element.textContent?.trim())).toEqual(['a', 'Angular']);
    expect(chip('Angular').getAttribute('data-coreui-chip-value')).toBe('ng');
    expect(chip('Angular').classList.contains('chip-primary')).toBe(true);
  });

  it('ChipSet disables every chip', async () => {
    host.selectable.set(true);
    host.removable.set(true);
    host.disabled.set(true);
    host.declare('a', 'b');
    await fixture.whenStable();
    expect(set.classList.contains('disabled')).toBe(true);
    expect(set.getAttribute('aria-disabled')).toBe('true');
    chips().forEach((element) => {
      expect(element.classList.contains('disabled')).toBe(true);
      expect(element.getAttribute('aria-disabled')).toBe('true');
      expect(element.querySelector('.chip-remove')).toBeNull();
    });
    expect(stops().length).toBe(0);
  });

  it('lets a chip opt out of the settings of the set', async () => {
    host.removable.set(true);
    host.disabled.set(true);
    host.declared.set([
      { key: 1, value: 'a', disabled: false },
      { key: 2, value: 'b' }
    ]);
    await fixture.whenStable();
    expect(chip('a').classList.contains('disabled')).toBe(false);
    expect(chip('a').querySelector('.chip-remove')).not.toBeNull();
    expect(chip('b').classList.contains('disabled')).toBe(true);

    host.disabled.set(false);
    host.declared.set([{ key: 4, value: 'd', removable: false }]);
    await fixture.whenStable();
    expect(chip('d').querySelector('.chip-remove')).toBeNull();

    host.declared.set([{ key: 3, value: 'c', selectable: false }]);
    host.selectable.set(true);
    await fixture.whenStable();
    chip('c').click();
    await fixture.whenStable();
    expect(host.selected()).toEqual([]);
  });

  it('forwards custom remove and check icons to its chips', async () => {
    host.filter.set(true);
    host.removable.set(true);
    host.customIcons.set(true);
    host.selected.set(['a']);
    host.declare('a');
    await fixture.whenStable();
    expect(chip('a').querySelector('.chip-check .custom-check')).not.toBeNull();
    expect(chip('a').querySelector('.chip-remove .custom-remove')).not.toBeNull();
  });

  it('keeps one tab stop that follows the keyboard and the mouse', async () => {
    host.removable.set(true);
    host.declare('a', 'b', 'c');
    await fixture.whenStable();
    expect(stops()).toEqual([chip('a')]);
    expect(chip('b').getAttribute('tabindex')).toBe('-1');

    chip('a').focus();
    press(chip('a'), 'ArrowRight');
    await fixture.whenStable();
    expect(stops()).toEqual([chip('b')]);

    chip('c').focus();
    await fixture.whenStable();
    expect(stops()).toEqual([chip('c')]);
  });

  it('moves the tab stop as soon as focus moves, before the next render', async () => {
    host.removable.set(true);
    host.declare('a', 'b', 'c');
    await fixture.whenStable();
    chip('a').focus();
    press(chip('a'), 'ArrowRight');
    expect(chip('b').getAttribute('tabindex')).toBe('0');
    expect(chip('a').getAttribute('tabindex')).toBe('-1');
  });

  it('rewrites only the old and the new tab stop when focus moves', async () => {
    host.removable.set(true);
    host.declare('a', 'b', 'c', 'd', 'e');
    await fixture.whenStable();
    chip('a').focus();
    const setAttribute = vi.spyOn(Element.prototype, 'setAttribute');
    press(chip('a'), 'ArrowRight');
    const writes = setAttribute.mock.calls.filter(([name]) => name === 'tabindex').length;
    setAttribute.mockRestore();
    expect(writes).toBeLessThanOrEqual(2);
    expect(stops()).toEqual([chip('b')]);
  });

  it('keeps the tab stop when focus lands inside a chip that is not a stop', async () => {
    host.declared.set([
      { key: 1, value: 'a', selectable: true },
      { key: 2, value: 'b' },
      { key: 3, value: 'c', selectable: true }
    ]);
    await fixture.whenStable();
    expect(stops()).toEqual([chip('a')]);
    chip('b').dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await fixture.whenStable();
    expect(stops()).toEqual([chip('a')]);
  });

  it('renders one tab stop on the server, where no refresh runs', async () => {
    const scope = globalThis as { ngServerMode?: boolean };
    scope.ngServerMode = true;
    try {
      const server = TestBed.createComponent(ChipSetHostComponent);
      server.componentInstance.removable.set(true);
      server.componentInstance.declare('a', 'b');
      server.detectChanges();
      const tabindexes = [...server.nativeElement.querySelectorAll('c-chip')].map((element: Element) =>
        element.getAttribute('tabindex')
      );
      expect(tabindexes).toEqual(['0', '-1']);
    } finally {
      delete scope.ngServerMode;
    }
  });

  it('renders one tab stop on the server when data and projected chips mix', async () => {
    const scope = globalThis as { ngServerMode?: boolean };
    scope.ngServerMode = true;
    try {
      const server = TestBed.createComponent(ChipSetHostComponent);
      server.componentInstance.selectable.set(true);
      server.componentInstance.selected.set(['b']);
      server.componentInstance.chips.set(['a', 'b']);
      server.componentInstance.declare('c');
      server.detectChanges();
      expect(server.nativeElement.querySelectorAll('c-chip[tabindex="0"]').length).toBe(1);
    } finally {
      delete scope.ngServerMode;
    }
  });

  it('takes focus that arrives before the first refresh as the tab stop', async () => {
    const scope = globalThis as { ngServerMode?: boolean };
    scope.ngServerMode = true;
    try {
      const early = TestBed.createComponent(ChipSetHostComponent);
      early.componentInstance.removable.set(true);
      early.componentInstance.declare('a', 'b');
      early.detectChanges();
      const [a, b] = early.nativeElement.querySelectorAll('c-chip') as NodeListOf<HTMLElement>;
      b.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
      expect(b.getAttribute('tabindex')).toBe('0');
      expect(a.getAttribute('tabindex')).toBe('-1');
    } finally {
      delete scope.ngServerMode;
    }
  });

  it('starts the tab stop on the first selected chip', async () => {
    host.selectable.set(true);
    host.selected.set(['b']);
    host.declare('a', 'b');
    await fixture.whenStable();
    expect(stops()).toEqual([chip('b')]);
  });

  it('a group labels remove buttons with the chip text, a listbox hides them', async () => {
    host.removable.set(true);
    host.chips.set([{ value: 'ng', label: 'Angular' }]);
    await fixture.whenStable();
    expect(chip('Angular').getAttribute('role')).toBeNull();
    expect(chip('Angular').querySelector('button.chip-remove')?.getAttribute('aria-label')).toBe('Remove Angular');

    host.removeLabel.set('Usuń');
    await fixture.whenStable();
    expect(chip('Angular').querySelector('button.chip-remove')?.getAttribute('aria-label')).toBe('Usuń Angular');

    host.selectable.set(true);
    await fixture.whenStable();
    expect(chip('Angular').querySelector('button')).toBeNull();
    expect(chip('Angular').querySelector('span.chip-remove')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('a chip selectable on its own in a group is a coordinated toggle button', async () => {
    host.declared.set([
      { key: 1, value: 'a', selectable: true },
      { key: 2, value: 'b' }
    ]);
    await fixture.whenStable();
    expect(set.getAttribute('role')).toBe('group');
    expect(chip('a').getAttribute('role')).toBe('button');
    expect(chip('a').getAttribute('aria-pressed')).toBe('false');
    expect(chip('b').getAttribute('role')).toBeNull();
    chip('a').click();
    await fixture.whenStable();
    expect(host.selected()).toEqual(['a']);
    expect(chip('a').getAttribute('aria-pressed')).toBe('true');

    host.removable.set(true);
    await fixture.whenStable();
    expect(chip('a').getAttribute('aria-label')).toBe('a');
    expect(chip('a').querySelector('button.chip-remove')?.getAttribute('aria-label')).toBe('Remove a');
    expect(chip('b').getAttribute('aria-label')).toBeNull();
    expect(chip('b').querySelector('button.chip-remove')?.getAttribute('aria-label')).toBe('Remove b');
  });

  it('does not touch the chips list when a projected chip is removed', async () => {
    host.removable.set(true);
    host.chips.set(['x']);
    host.declare('a');
    await fixture.whenStable();
    press(chip('a'), 'Backspace');
    await fixture.whenStable();
    expect(host.removed).toEqual(['a']);
    expect(host.chipsChanges).toEqual([]);
  });

  it('moves focus to the neighbor once the parent removes the focused chip', async () => {
    host.removable.set(true);
    host.selectable.set(true);
    host.selected.set(['b']);
    host.chips.set(['a', 'b', 'c']);
    await fixture.whenStable();
    chip('b').focus();
    press(chip('b'), 'Delete');
    await fixture.whenStable();
    expect(document.activeElement).toBe(chip('b'));

    host.chips.set(host.chipsChanges.at(-1)!);
    await fixture.whenStable();
    expect(document.activeElement).toBe(chip('c'));
    expect(stops()).toEqual([chip('c')]);
    expect(host.selected()).toEqual(['b']);
    expect(announce).toHaveBeenCalledWith('b removed', { context: set });
  });

  it('keeps the selection of a chip the parent only hides', async () => {
    host.selectable.set(true);
    host.selected.set(['b']);
    host.chips.set(['a', 'b']);
    await fixture.whenStable();
    host.chips.set(['a']);
    await fixture.whenStable();
    expect(host.selected()).toEqual(['b']);

    host.chips.set(['a', 'b']);
    await fixture.whenStable();
    expect(chip('b').getAttribute('aria-selected')).toBe('true');
  });

  it('follows a chip label that changes after the first render', async () => {
    host.removable.set(true);
    host.chips.set([{ value: 'apple', label: 'Apple' }]);
    await fixture.whenStable();
    host.chips.set([{ value: 'apple', label: 'Jabłko' }]);
    await fixture.whenStable();
    expect(chip('Jabłko').querySelector('button.chip-remove')?.getAttribute('aria-label')).toBe('Remove Jabłko');

    host.chips.set([]);
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('Jabłko removed', { context: set });
  });

  it('moves focus to the previous chip once the parent removes the last one', async () => {
    host.removable.set(true);
    host.chips.set(['a', 'b', 'c']);
    await fixture.whenStable();
    chip('c').focus();
    host.chips.set(['a', 'b']);
    await fixture.whenStable();
    expect(document.activeElement).toBe(chip('b'));
  });

  it('moves focus to the neighbor, not to a chip with the same text further on', async () => {
    host.removable.set(true);
    host.declared.set([
      { key: 1, label: 'x' },
      { key: 2, label: 'y' },
      { key: 3, label: 'x' }
    ]);
    await fixture.whenStable();
    chips()[0].focus();
    host.declared.update((declared) => declared.slice(1));
    await fixture.whenStable();
    expect(document.activeElement).toBe(chip('y'));
  });

  it('moves focus to the neighbor when the chip goes while the window has no focus', async () => {
    host.removable.set(true);
    host.chips.set(['a', 'b', 'c']);
    await fixture.whenStable();
    chip('b').focus();
    const hasFocus = vi.spyOn(document, 'hasFocus').mockReturnValue(false);
    chip('b').dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await Promise.resolve();
    hasFocus.mockRestore();

    host.chips.set(['a', 'c']);
    await fixture.whenStable();
    expect(document.activeElement).toBe(chip('c'));
  });

  it('focuses the set when its last chip is removed', async () => {
    host.removable.set(true);
    host.chips.set(['a']);
    await fixture.whenStable();
    chip('a').focus();
    host.chips.set([]);
    await fixture.whenStable();
    expect(document.activeElement).toBe(set);
    expect(set.getAttribute('tabindex')).toBe('-1');

    const outside = fixture.nativeElement.querySelector('#outside') as HTMLElement;
    set.dispatchEvent(new FocusEvent('focusout', { relatedTarget: outside, bubbles: true }));
    outside.focus();
    await fixture.whenStable();
    expect(set.getAttribute('tabindex')).toBeNull();
  });

  it('does not steal focus when a chip without focus is removed', async () => {
    host.removable.set(true);
    host.chips.set(['a', 'b']);
    await fixture.whenStable();
    const outside = fixture.nativeElement.querySelector('#outside') as HTMLElement;
    outside.focus();
    host.chips.set(['b']);
    await fixture.whenStable();
    expect(document.activeElement).toBe(outside);
  });

  it('keeps selection, focus and silence when the parent re-creates the chips', async () => {
    host.selectable.set(true);
    host.selected.set(['b']);
    host.declare('a', 'b');
    await fixture.whenStable();
    chip('b').focus();
    announce.mockClear();

    host.declare('a', 'b');
    await fixture.whenStable();
    expect(host.selected()).toEqual(['b']);
    expect(document.activeElement).toBe(chip('b'));
    expect(stops()).toEqual([chip('b')]);
    expect(announce).not.toHaveBeenCalled();
  });

  it('announces added chips by their text, and stays silent on the first render', async () => {
    host.chips.set(['a']);
    await fixture.whenStable();
    expect(announce).not.toHaveBeenCalled();

    host.chips.set(['a', { value: 'ng', label: 'Angular' }]);
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('Angular added', { context: set });
  });

  it('announces the right chip after another chip changed its text', async () => {
    host.removable.set(true);
    host.declared.set([
      { key: 1, label: 'Apple' },
      { key: 2, label: 'Banana' }
    ]);
    await fixture.whenStable();
    host.declared.set([
      { key: 1, label: 'Apfel' },
      { key: 2, label: 'Banana' }
    ]);
    await fixture.whenStable();
    host.declared.set([{ key: 1, label: 'Apfel' }]);
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('Banana removed', { context: set });
    expect(announce).not.toHaveBeenCalledWith('Apfel added', { context: set });
  });

  it('announces the first chip added to an empty set', async () => {
    await fixture.whenStable();
    host.chips.set(['Angular']);
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('Angular added', { context: set });
  });

  it('announces with the wording set on the set', async () => {
    host.added.set('dodano');
    host.removedText.set('usunięto');
    host.chips.set(['a']);
    await fixture.whenStable();
    host.chips.set(['a', 'b']);
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('b dodano', { context: set });
    host.chips.set(['b']);
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('a usunięto', { context: set });
  });

  it('ignores tabindex on a chip inside a set', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(vi.fn());
    @Component({
      imports: [ChipSetComponent, ChipComponent],
      template: `<c-chip-set removable><c-chip tabindex="0">a</c-chip><c-chip tabindex="0">b</c-chip></c-chip-set>`
    })
    class TabindexHostComponent {}
    const tabFixture = TestBed.createComponent(TabindexHostComponent);
    await tabFixture.whenStable();
    const tabbable = [...tabFixture.nativeElement.querySelectorAll('c-chip')].filter(
      (element: HTMLElement) => element.getAttribute('tabindex') === '0'
    );
    expect(tabbable.length).toBe(1);
    expect(warn).toHaveBeenCalled();
  });
});

@Component({
  imports: [ChipSetComponent],
  template: `<c-chip-set removable [(chips)]="list" />`
})
class TwoWayChipsHostComponent {
  readonly list = signal<string[]>(['a', 'b']);
}

describe('ChipSetComponent with [(chips)]', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
  });

  it('removes the chip through the two-way binding', async () => {
    const fixture = TestBed.createComponent(TwoWayChipsHostComponent);
    await fixture.whenStable();
    const set = fixture.nativeElement.querySelector('c-chip-set') as HTMLElement;
    set.querySelector<HTMLButtonElement>('c-chip .chip-remove')!.click();
    await fixture.whenStable();
    expect(fixture.componentInstance.list()).toEqual(['b']);
    expect(set.querySelectorAll('c-chip').length).toBe(1);
  });
});

@Component({
  imports: [ChipSetComponent],
  template: `<c-chip-set selectable [chips]="['a', 'b']" [selected]="selected()" />`
})
class OneWaySelectedHostComponent {
  readonly selected = signal<string[]>([]);
}

describe('ChipSetComponent with one-way [selected]', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
  });

  it('applies new values from the parent but does not write back', async () => {
    const fixture = TestBed.createComponent(OneWaySelectedHostComponent);
    await fixture.whenStable();
    const [a, b] = fixture.nativeElement.querySelectorAll('c-chip') as NodeListOf<HTMLElement>;
    a.click();
    await fixture.whenStable();
    expect(a.getAttribute('aria-selected')).toBe('true');
    expect(fixture.componentInstance.selected()).toEqual([]);

    fixture.componentInstance.selected.set(['b']);
    await fixture.whenStable();
    expect(a.getAttribute('aria-selected')).toBe('false');
    expect(b.getAttribute('aria-selected')).toBe('true');
  });
});
