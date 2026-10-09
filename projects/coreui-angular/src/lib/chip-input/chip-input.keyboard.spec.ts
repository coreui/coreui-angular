import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnouncerService } from '../services/announcer.service';
import { ChipInputComponent } from './chip-input.component';

const KEY_CODES: Record<string, number> = {
  ArrowLeft: 37,
  ArrowRight: 39,
  Backspace: 8,
  Delete: 46,
  End: 35,
  Escape: 27,
  Home: 36
};

const press = (target: Element, key: string, init: KeyboardEventInit = {}) => {
  const event = new KeyboardEvent('keydown', {
    key,
    keyCode: KEY_CODES[key],
    bubbles: true,
    cancelable: true,
    ...init
  });
  target.dispatchEvent(event);
  return event;
};

@Component({
  imports: [ChipInputComponent],
  template: `
    <div [attr.dir]="dir()">
      <c-chip-input [selectable]="selectable()" [(selected)]="selected" [(value)]="value" />
    </div>
    <button id="outside">Outside</button>
  `
})
class KeyboardHostComponent {
  readonly dir = signal<string | null>(null);
  readonly selectable = signal(false);
  readonly selected = signal<string[]>([]);
  readonly value = signal<string[]>(['a', 'b', 'c']);
}

describe('ChipInputComponent keyboard', () => {
  let fixture: ComponentFixture<KeyboardHostComponent>;
  let host: KeyboardHostComponent;
  let root: HTMLElement;

  const element = () => root.querySelector<HTMLElement>('c-chip-input')!;
  const field = () => element().querySelector<HTMLInputElement>('input.chip-input-field')!;
  const chip = (value: string) => element().querySelector<HTMLElement>(`c-chip[data-coreui-chip-value="${value}"]`)!;
  const tabindexes = () => [...element().querySelectorAll('c-chip')].map((item) => item.getAttribute('tabindex'));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardHostComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
    vi.spyOn(TestBed.inject(AnnouncerService), 'announce').mockReturnValue(vi.fn());
    fixture = TestBed.createComponent(KeyboardHostComponent);
    host = fixture.componentInstance;
    root = fixture.nativeElement;
    document.body.append(root);
    await fixture.whenStable();
  });

  afterEach(() => {
    root.remove();
    vi.restoreAllMocks();
  });

  it('keeps two tab stops: the last chip and the field', () => {
    expect(tabindexes()).toEqual(['-1', '-1', '0']);
    expect(field().tabIndex).toBe(0);
  });

  it('moves the chip stop back to the last chip when the field gets focus', async () => {
    chip('c').focus();
    press(chip('c'), 'Home');
    await fixture.whenStable();
    expect(document.activeElement).toBe(chip('a'));
    expect(tabindexes()).toEqual(['0', '-1', '-1']);

    field().focus();
    await fixture.whenStable();
    expect(tabindexes()).toEqual(['-1', '-1', '0']);
  });

  it('moves the chip stop to a chip added with Enter', async () => {
    field().focus();
    field().value = 'd';
    field().dispatchEvent(new Event('input', { bubbles: true }));
    field().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(tabindexes()).toEqual(['-1', '-1', '-1', '0']);
    expect(chip('d').getAttribute('tabindex')).toBe('0');
  });

  it('Backspace on an empty field focuses the last chip', () => {
    field().focus();
    field().value = 'x';
    field().dispatchEvent(new Event('input', { bubbles: true }));
    expect(press(field(), 'Backspace').defaultPrevented).toBe(false);
    expect(document.activeElement).toBe(field());

    field().value = '';
    field().dispatchEvent(new Event('input', { bubbles: true }));
    expect(press(field(), 'Backspace').defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(chip('c'));
  });

  it('Delete on an empty field focuses the last chip too', () => {
    field().focus();
    expect(press(field(), 'Delete').defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(chip('c'));
  });

  it('the arrow toward the chips keeps a text selection in the field', () => {
    field().focus();
    field().value = 'xy';
    field().dispatchEvent(new Event('input', { bubbles: true }));
    field().setSelectionRange(0, 2);
    press(field(), 'ArrowLeft');
    expect(document.activeElement).toBe(field());
  });

  it('Space on a selectable chip toggles it and keeps focus there', async () => {
    host.selectable.set(true);
    await fixture.whenStable();
    chip('a').focus();
    press(chip('a'), ' ');
    await fixture.whenStable();
    expect(host.selected()).toEqual(['a']);
    expect(document.activeElement).toBe(chip('a'));
  });

  it('a held Backspace does not leave the empty field', () => {
    field().focus();
    expect(press(field(), 'Backspace', { repeat: true }).defaultPrevented).toBe(false);
    expect(document.activeElement).toBe(field());
  });

  it('the arrow toward the chips at the start of the field focuses the last chip', () => {
    field().focus();
    field().value = 'xy';
    field().setSelectionRange(1, 1);
    press(field(), 'ArrowLeft');
    expect(document.activeElement).toBe(field());

    field().setSelectionRange(0, 0);
    press(field(), 'ArrowLeft');
    expect(document.activeElement).toBe(chip('c'));
  });

  it('the arrow away from the chips on the last chip focuses the field', () => {
    chip('a').focus();
    press(chip('a'), 'ArrowRight');
    expect(document.activeElement).toBe(chip('b'));
    chip('c').focus();
    press(chip('c'), 'ArrowRight');
    expect(document.activeElement).toBe(field());
  });

  it('mirrors both arrows in RTL', async () => {
    host.dir.set('rtl');
    await fixture.whenStable();
    field().focus();
    field().setSelectionRange(0, 0);
    press(field(), 'ArrowRight');
    expect(document.activeElement).toBe(chip('c'));
    press(chip('c'), 'ArrowLeft');
    expect(document.activeElement).toBe(field());
  });

  it('Escape clears the field and leaves it', () => {
    field().focus();
    field().value = 'draft';
    field().dispatchEvent(new Event('input', { bubbles: true }));
    press(field(), 'Escape');
    expect(field().value).toBe('');
    expect(document.activeElement).not.toBe(field());
    expect(host.value()).toEqual(['a', 'b', 'c']);
  });

  it('a printable key on a chip moves focus to the field, a shortcut does not', () => {
    chip('b').focus();
    press(chip('b'), 'c', { ctrlKey: true });
    expect(document.activeElement).toBe(chip('b'));
    press(chip('b'), 'v', { metaKey: true });
    expect(document.activeElement).toBe(chip('b'));
    press(chip('b'), 'ą', { altKey: true });
    expect(document.activeElement).toBe(field());

    chip('b').focus();
    press(chip('b'), 'ł', { ctrlKey: true, altKey: true });
    expect(document.activeElement).toBe(field());

    chip('b').focus();
    press(chip('b'), 'x');
    expect(document.activeElement).toBe(field());
  });

  it('moves focus to the neighbor after Delete, and to the field after the last chip', async () => {
    chip('b').focus();
    press(chip('b'), 'Delete');
    await fixture.whenStable();
    expect(host.value()).toEqual(['a', 'c']);
    expect(document.activeElement).toBe(chip('c'));

    host.value.set(['c']);
    await fixture.whenStable();
    chip('c').focus();
    press(chip('c'), 'Backspace');
    await fixture.whenStable();
    expect(host.value()).toEqual([]);
    expect(document.activeElement).toBe(field());
  });

  it('keeps the draft when the focused chip is removed and the browser blurs it first', async () => {
    const remove = Element.prototype.remove;
    vi.spyOn(Element.prototype, 'remove').mockImplementation(function (this: Element) {
      const active = document.activeElement;
      if (active && this.contains(active)) {
        active.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: null }));
      }
      remove.call(this);
    });
    field().value = 'draft';
    field().dispatchEvent(new Event('input', { bubbles: true }));
    chip('b').focus();
    press(chip('b'), 'Delete');
    await fixture.whenStable();
    expect(host.value()).toEqual(['a', 'c']);
    expect(field().value).toBe('draft');
  });

  it('keeps the draft when the window loses focus', async () => {
    field().value = 'draft';
    field().dispatchEvent(new Event('input', { bubbles: true }));
    chip('b').focus();
    vi.spyOn(document, 'hasFocus').mockReturnValue(false);
    chip('b').dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: null }));
    await fixture.whenStable();
    expect(host.value()).toEqual(['a', 'b', 'c']);
    expect(field().value).toBe('draft');
  });

  it('keeps focus in the field when a chip is removed programmatically', async () => {
    chip('b').focus();
    field().focus();
    host.value.set(['a', 'c']);
    await fixture.whenStable();
    expect(document.activeElement).toBe(field());
  });

  it('clears the selection when the field gets focus', async () => {
    host.selectable.set(true);
    host.selected.set(['a']);
    await fixture.whenStable();
    field().focus();
    await fixture.whenStable();
    expect(host.selected()).toEqual([]);
  });

  it('a click on the background focuses the field', () => {
    element().click();
    expect(document.activeElement).toBe(field());
  });
});

describe('ChipInputComponent on the server', () => {
  it('renders no chip tab stop before its first refresh', () => {
    const scope = globalThis as { ngServerMode?: boolean };
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    scope.ngServerMode = true;
    try {
      const fixture = TestBed.createComponent(KeyboardHostComponent);
      fixture.detectChanges();
      const stops = [...fixture.nativeElement.querySelectorAll('c-chip')].map((chip: Element) =>
        chip.getAttribute('tabindex')
      );
      expect(stops).toEqual(['-1', '-1', '-1']);
    } finally {
      delete scope.ngServerMode;
    }
  });
});
