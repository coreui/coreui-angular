import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChipComponent } from '../chip/chip.component';
import { ChipSetComponent } from '../chip-set/chip-set.component';
import { AnnouncerService } from '../services/announcer.service';
import { ChipInputComponent } from './chip-input.component';

const KEY_CODES: Record<string, number> = { Enter: 13, Delete: 46, Backspace: 8 };

const press = (target: Element, key: string) =>
  target.dispatchEvent(new KeyboardEvent('keydown', { key, keyCode: KEY_CODES[key], bubbles: true, cancelable: true }));

@Component({
  imports: [ChipInputComponent, ChipSetComponent, ChipComponent],
  template: `
    <label for="tags">Tags</label>
    <c-chip-input
      id="tags"
      placeholder="Add a tag"
      [ariaRemoveLabel]="removeLabel()"
      [chipClassName]="chipClassName()"
      [createOnBlur]="createOnBlur()"
      [disabled]="disabled()"
      [label]="label()"
      [maxChips]="maxChips()"
      [readonly]="readonly()"
      [selectable]="selectable()"
      [selectionMode]="mode()"
      [(selected)]="selected"
      [(value)]="value"
      (add)="added.push($event)"
      (inputChange)="texts.push($event)"
      (remove)="removed.push($event)"
    />
    <button id="outside">Outside</button>
    <c-chip-set><c-chip removable value="other">Other</c-chip></c-chip-set>
  `
})
class ChipInputHostComponent {
  readonly chipClassName = signal<string | ((value: string) => string) | undefined>(undefined);
  readonly createOnBlur = signal(true);
  readonly disabled = signal(false);
  readonly label = signal<string | undefined>(undefined);
  readonly maxChips = signal<number | null>(null);
  readonly mode = signal<'single' | 'multiple'>('multiple');
  readonly readonly = signal(false);
  readonly removeLabel = signal('Remove');
  readonly selectable = signal(false);
  readonly selected = signal<string[]>([]);
  readonly value = signal<string[]>([]);
  readonly added: string[] = [];
  readonly removed: string[] = [];
  readonly texts: string[] = [];
}

describe('ChipInputComponent', () => {
  let fixture: ComponentFixture<ChipInputHostComponent>;
  let host: ChipInputHostComponent;
  let root: HTMLElement;
  let announce: ReturnType<typeof vi.spyOn>;

  const element = () => root.querySelector<HTMLElement>('c-chip-input')!;
  const field = () => element().querySelector<HTMLInputElement>('input.chip-input-field')!;
  const chips = () => [...element().querySelectorAll<HTMLElement>('c-chip')];
  const chip = (value: string) => chips().find((item) => item.getAttribute('data-coreui-chip-value') === value)!;
  const type = (text: string) => {
    field().value = text;
    field().dispatchEvent(new Event('input', { bubbles: true }));
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipInputHostComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
    announce = vi.spyOn(TestBed.inject(AnnouncerService), 'announce').mockReturnValue(vi.fn());
    fixture = TestBed.createComponent(ChipInputHostComponent);
    host = fixture.componentInstance;
    root = fixture.nativeElement;
    document.body.append(root);
  });

  afterEach(() => {
    root.remove();
    vi.restoreAllMocks();
  });

  it('loads and displays ChipInput component', async () => {
    host.value.set(['a', 'b']);
    await fixture.whenStable();
    expect(element().classList.contains('chip-input')).toBe(true);
    expect(chips().map((item) => item.textContent?.trim())).toEqual(['a', 'b']);
    expect(field().placeholder).toBe('Add a tag');
  });

  it('gives the id to the text field, so an external label names it', async () => {
    await fixture.whenStable();
    const withId = root.querySelectorAll('#tags');
    expect(withId.length).toBe(1);
    expect(withId[0]).toBe(field());
    expect(field().labels?.[0]?.textContent).toBe('Tags');
  });

  it('renders an inline label for the text field inside the container', async () => {
    host.label.set('Skills:');
    await fixture.whenStable();
    const label = element().querySelector<HTMLLabelElement>('label.chip-input-label')!;
    expect(label.textContent).toBe('Skills:');
    expect(element().firstElementChild).toBe(label);
    expect([...(field().labels ?? [])]).toContain(label);
    const pressed = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    label.dispatchEvent(pressed);
    expect(pressed.defaultPrevented).toBe(true);
  });

  it('has no role and no aria-disabled on the host', async () => {
    host.disabled.set(true);
    await fixture.whenStable();
    expect(element().getAttribute('role')).toBeNull();
    expect(element().getAttribute('aria-disabled')).toBeNull();
  });

  it('adds a chip on Enter', async () => {
    await fixture.whenStable();
    type('  Angular ');
    await fixture.whenStable();
    expect(field().size).toBe(10);
    const enter = new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true, cancelable: true });
    field().dispatchEvent(enter);
    expect(enter.defaultPrevented).toBe(true);
    await fixture.whenStable();
    expect(host.value()).toEqual(['Angular']);
    expect(host.added).toEqual(['Angular']);
    expect(field().value).toBe('');
    expect(chips().length).toBe(1);
  });

  it('does not add a duplicate or an empty chip', async () => {
    host.value.set(['a']);
    await fixture.whenStable();
    type('a');
    press(field(), 'Enter');
    type('   ');
    press(field(), 'Enter');
    await fixture.whenStable();
    expect(host.value()).toEqual(['a']);
    expect(host.added).toEqual([]);
  });

  it('splits typed text on the separator and keeps the last part in the field', async () => {
    await fixture.whenStable();
    type('a,b,c');
    await fixture.whenStable();
    expect(host.value()).toEqual(['a', 'b']);
    expect(field().value).toBe('c');
    expect(host.texts.at(-1)).toBe('c');
  });

  it('adds every part of pasted text', async () => {
    await fixture.whenStable();
    const event = new Event('paste', { bubbles: true, cancelable: true }) as ClipboardEvent;
    Object.defineProperty(event, 'clipboardData', { value: { getData: () => 'x, y ,z' } });
    field().dispatchEvent(event);
    await fixture.whenStable();
    expect(event.defaultPrevented).toBe(true);
    expect(host.value()).toEqual(['x', 'y', 'z']);
  });

  it('stops adding at maxChips', async () => {
    host.maxChips.set(2);
    await fixture.whenStable();
    type('a,b,c,');
    await fixture.whenStable();
    expect(host.value()).toEqual(['a', 'b']);
  });

  it('removes a chip with its remove button', async () => {
    host.value.set(['a', 'b']);
    await fixture.whenStable();
    chip('a').querySelector<HTMLButtonElement>('button.chip-remove')!.click();
    await fixture.whenStable();
    expect(host.value()).toEqual(['b']);
    expect(host.removed).toEqual(['a']);
  });

  it('names the remove buttons with its label and the chip value', async () => {
    host.value.set(['a']);
    host.removeLabel.set('Usuń');
    await fixture.whenStable();
    expect(chip('a').querySelector('button.chip-remove')?.getAttribute('aria-label')).toBe('Usuń a');
  });

  it('selects chips as toggle buttons and deselects siblings in single mode', async () => {
    host.value.set(['a', 'b']);
    host.selectable.set(true);
    host.mode.set('single');
    await fixture.whenStable();
    expect(chip('a').getAttribute('role')).toBe('button');
    expect(chip('a').getAttribute('aria-pressed')).toBe('false');
    chip('a').click();
    chip('b').click();
    await fixture.whenStable();
    expect(host.selected()).toEqual(['b']);
    expect(chip('a').getAttribute('aria-pressed')).toBe('false');
    expect(chip('b').getAttribute('aria-pressed')).toBe('true');
  });

  it('leaves the disabled semantics to the field', async () => {
    host.value.set(['a']);
    host.disabled.set(true);
    await fixture.whenStable();
    expect(field().disabled).toBe(true);
    expect(element().classList.contains('disabled')).toBe(true);
    expect(chip('a').querySelector('.chip-remove')).toBeNull();
    expect(chip('a').getAttribute('tabindex')).toBeNull();
  });

  it('leaves the readonly semantics to the field and blocks every change', async () => {
    host.value.set(['a']);
    host.selectable.set(true);
    host.readonly.set(true);
    await fixture.whenStable();
    expect(field().readOnly).toBe(true);
    expect(chip('a').querySelector('.chip-remove')).toBeNull();
    expect(chip('a').getAttribute('aria-disabled')).toBe('true');
    expect(chip('a').classList.contains('chip-clickable')).toBe(false);
    chip('a').click();
    press(chip('a'), 'Delete');
    type('b');
    press(field(), 'Enter');
    await fixture.whenStable();
    expect(host.selected()).toEqual([]);
    expect(host.value()).toEqual(['a']);
  });

  it('creates a chip when focus leaves the component, also through one of its chips', async () => {
    host.value.set(['a']);
    await fixture.whenStable();
    const leave = (from: Element, to: Element | null) =>
      from.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: to }));
    type('b');
    leave(field(), chip('a'));
    await fixture.whenStable();
    expect(host.value()).toEqual(['a']);

    leave(chip('a'), root.querySelector('#outside'));
    await fixture.whenStable();
    expect(host.value()).toEqual(['a', 'b']);

    type('c');
    leave(field(), root.querySelector('c-chip-set c-chip'));
    await fixture.whenStable();
    expect(host.value()).toEqual(['a', 'b', 'c']);

    host.createOnBlur.set(false);
    await fixture.whenStable();
    type('d');
    leave(field(), null);
    await fixture.whenStable();
    expect(host.value()).toEqual(['a', 'b', 'c']);
  });

  it('drops a removed chip from the selection', async () => {
    host.value.set(['a', 'b']);
    host.selectable.set(true);
    host.selected.set(['a']);
    await fixture.whenStable();
    chip('a').querySelector<HTMLButtonElement>('button.chip-remove')!.click();
    await fixture.whenStable();
    expect(host.value()).toEqual(['b']);
    expect(host.selected()).toEqual([]);
  });

  it('keeps the selection of a readonly control when the field gets focus', async () => {
    host.value.set(['a']);
    host.selectable.set(true);
    host.readonly.set(true);
    host.selected.set(['a']);
    await fixture.whenStable();
    field().focus();
    await fixture.whenStable();
    expect(host.selected()).toEqual(['a']);
  });

  it('keeps text that the chip limit refused', async () => {
    host.maxChips.set(1);
    await fixture.whenStable();
    type('a,b,c');
    await fixture.whenStable();
    expect(host.value()).toEqual(['a']);
    expect(field().value).toBe('b,c');

    host.value.set([]);
    await fixture.whenStable();
    press(field(), 'Enter');
    await fixture.whenStable();
    expect(host.value()).toEqual(['b']);
    expect(field().value).toBe('c');
  });

  it('pastes into the text already in the field', async () => {
    await fixture.whenStable();
    type('foobaz');
    field().setSelectionRange(3, 3);
    const event = new Event('paste', { bubbles: true, cancelable: true }) as ClipboardEvent;
    Object.defineProperty(event, 'clipboardData', { value: { getData: () => ',bar,' } });
    field().dispatchEvent(event);
    await fixture.whenStable();
    expect(host.value()).toEqual(['foo', 'bar', 'baz']);
    expect(field().value).toBe('');
  });

  it('ignores Enter while an input method is composing', async () => {
    await fixture.whenStable();
    type('とうきょう');
    field().dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true, cancelable: true })
    );
    field().dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', keyCode: 229, bubbles: true, cancelable: true })
    );
    await fixture.whenStable();
    expect(host.value()).toEqual([]);
    expect(field().value).toBe('とうきょう');
  });

  it('keeps focus in the field when the background is pressed', async () => {
    await fixture.whenStable();
    const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    element().dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    host.value.set(['a']);
    await fixture.whenStable();
    for (const target of [field(), chip('a')]) {
      const pressed = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
      target.dispatchEvent(pressed);
      expect(pressed.defaultPrevented).toBe(false);
    }
  });

  it('adds the class from chipClassName to each chip', async () => {
    host.value.set(['a', 'b']);
    host.chipClassName.set((value) => (value === 'a' ? 'chip-primary' : 'chip-secondary'));
    await fixture.whenStable();
    expect(chip('a').classList.contains('chip-primary')).toBe(true);
    expect(chip('b').classList.contains('chip-secondary')).toBe(true);
    expect(chip('a').classList.contains('chip')).toBe(true);
  });

  it('renders a normalized list without writing it back to the value', async () => {
    host.value.set([' a', 'a', 'b ']);
    await fixture.whenStable();
    expect(chips().map((item) => item.getAttribute('data-coreui-chip-value'))).toEqual(['a', 'b']);
    expect(host.value()).toEqual([' a', 'a', 'b ']);
  });

  it('announces added and removed chips', async () => {
    host.value.set(['a']);
    await fixture.whenStable();
    type('x');
    press(field(), 'Enter');
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('x added', { context: element() });

    host.value.set(['a']);
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('x removed', { context: element() });
  });

  it('has no hidden form input', async () => {
    host.value.set(['a']);
    await fixture.whenStable();
    expect(element().querySelector('input[type="hidden"]')).toBeNull();
    expect(element().querySelector('[name]')).toBeNull();
  });
});

@Component({
  imports: [ChipInputComponent, ChipComponent],
  template: `<c-chip-input [value]="['a']"><c-chip value="stray">Stray</c-chip></c-chip-input>`
})
class StrayChipHostComponent {}

describe('ChipInputComponent with a projected chip', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
  });

  it('ignores the chip and warns', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const fixture = TestBed.createComponent(StrayChipHostComponent);
    await fixture.whenStable();
    const element = fixture.nativeElement.querySelector('c-chip-input') as HTMLElement;
    expect([...element.querySelectorAll('c-chip')].map((chip) => chip.getAttribute('data-coreui-chip-value'))).toEqual([
      'a'
    ]);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('c-chip-input'));
    warn.mockRestore();
  });
});

@Component({
  imports: [ChipInputComponent],
  template: `
    <c-chip-input
      ariaAddedAnnouncement="dodano"
      ariaRemovedAnnouncement="usunięto"
      chipClassName="chip-primary"
      filter
      maxChips="2"
      separator=";"
      size="sm"
      [(selected)]="selected"
      [(value)]="value"
    />
    <c-chip-input
      id="plain"
      aria-describedby="plainHint"
      aria-label="Plain tags"
      aria-labelledby="plainHint"
      [separator]="null"
      [(value)]="plain"
    />
    <c-chip-input maxChips="" [(value)]="unlimited" />
    <span id="plainHint">Hint</span>
  `
})
class OptionsHostComponent {
  readonly plain = signal<string[]>([]);
  readonly selected = signal<string[]>(['a']);
  readonly unlimited = signal<string[]>([]);
  readonly value = signal<string[]>(['a']);
}

describe('ChipInputComponent options', () => {
  let fixture: ComponentFixture<OptionsHostComponent>;
  let announce: ReturnType<typeof vi.spyOn>;
  const inputs = () => [...fixture.nativeElement.querySelectorAll('c-chip-input')] as HTMLElement[];
  const typeInto = (element: HTMLElement, text: string) => {
    const field = element.querySelector<HTMLInputElement>('input')!;
    field.value = text;
    field.dispatchEvent(new Event('input', { bubbles: true }));
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    announce = vi.spyOn(TestBed.inject(AnnouncerService), 'announce').mockReturnValue(vi.fn());
    fixture = TestBed.createComponent(OptionsHostComponent);
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('passes size, chipClassName and filter to the chips', () => {
    const [element] = inputs();
    const chip = element.querySelector<HTMLElement>('c-chip')!;
    expect(element.classList.contains('chip-input-sm')).toBe(true);
    expect(chip.classList.contains('chip-primary')).toBe(true);
    expect(chip.getAttribute('role')).toBe('button');
    expect(chip.querySelector('.chip-check')).not.toBeNull();
  });

  it('moves aria-label, aria-labelledby and aria-describedby from the host to the text field', () => {
    const plain = inputs()[1];
    const field = plain.querySelector('input')!;
    expect(field.getAttribute('aria-label')).toBe('Plain tags');
    expect(field.getAttribute('aria-labelledby')).toBe('plainHint');
    expect(field.getAttribute('aria-describedby')).toBe('plainHint');
    expect(plain.getAttribute('aria-label')).toBeNull();
    expect(plain.getAttribute('aria-labelledby')).toBeNull();
    expect(plain.getAttribute('aria-describedby')).toBeNull();
  });

  it('splits on its own separator, and not at all without one', async () => {
    const [element, plain] = inputs();
    typeInto(element, 'b;c');
    typeInto(plain, 'x,y');
    await fixture.whenStable();
    expect(fixture.componentInstance.value()).toEqual(['a', 'b']);
    expect(fixture.componentInstance.plain()).toEqual([]);
    expect(plain.querySelector('input')!.value).toBe('x,y');
  });

  it('reads maxChips from a static attribute, and an empty one as no limit', async () => {
    const [element, , unlimited] = inputs();
    const [limited, , open] = fixture.debugElement
      .queryAll(By.directive(ChipInputComponent))
      .map((item) => item.componentInstance as ChipInputComponent);
    expect(limited.maxChips()).toBe(2);
    expect(open.maxChips()).toBeNull();
    typeInto(element, 'b;c;');
    typeInto(unlimited, 'x,y,z,');
    await fixture.whenStable();
    expect(fixture.componentInstance.value()).toEqual(['a', 'b']);
    expect(fixture.componentInstance.unlimited()).toEqual(['x', 'y', 'z']);
  });

  it('announces with its own wording', async () => {
    const [element] = inputs();
    typeInto(element, 'b;');
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('b dodano', { context: element });
    fixture.componentInstance.value.set(['b']);
    await fixture.whenStable();
    expect(announce).toHaveBeenCalledWith('a usunięto', { context: element });
  });
});
