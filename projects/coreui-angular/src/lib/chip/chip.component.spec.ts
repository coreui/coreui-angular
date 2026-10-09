import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Colors } from '../coreui.types';
import { ChipComponent } from './chip.component';
import { ChipSize } from './chip.types';

const KEY_CODES: Record<string, number> = { Enter: 13, ' ': 32, Backspace: 8, Delete: 46 };

const press = (target: HTMLElement, key: string) =>
  target.dispatchEvent(new KeyboardEvent('keydown', { key, keyCode: KEY_CODES[key], bubbles: true, cancelable: true }));

@Component({
  imports: [ChipComponent],
  template: `
    <c-chip
      [active]="active()"
      [ariaRemoveLabel]="ariaRemoveLabel()"
      [attr.aria-label]="label()"
      [clickable]="clickable()"
      [color]="color()"
      [disabled]="disabled()"
      [filter]="filter()"
      [removable]="removable()"
      [role]="role()"
      [selectable]="selectable()"
      [selectedIcon]="customIcon() ? checkTpl : undefined"
      [size]="size()"
      [value]="value()"
      [variant]="variant()"
      [(selected)]="selected"
      (remove)="removed.push($event)"
      (selectedChange)="changes.push($event)"
    >
      Vue
    </c-chip>
    <ng-template #checkTpl><b class="custom-check">✓</b></ng-template>
  `
})
class ChipHostComponent {
  readonly active = signal(false);
  readonly ariaRemoveLabel = signal<string | undefined>(undefined);
  readonly clickable = signal(false);
  readonly color = signal<Colors | undefined>(undefined);
  readonly customIcon = signal(false);
  readonly disabled = signal<boolean | undefined>(undefined);
  readonly filter = signal<boolean | undefined>(undefined);
  readonly label = signal<string | undefined>(undefined);
  readonly removable = signal<boolean | undefined>(undefined);
  readonly role = signal<string | undefined>(undefined);
  readonly selectable = signal<boolean | undefined>(undefined);
  readonly selected = signal(false);
  readonly size = signal<ChipSize | undefined>(undefined);
  readonly value = signal<string | undefined>(undefined);
  readonly variant = signal<'outline' | undefined>(undefined);
  readonly changes: boolean[] = [];
  readonly removed: (MouseEvent | KeyboardEvent)[] = [];
}

describe('ChipComponent', () => {
  let fixture: ComponentFixture<ChipHostComponent>;
  let host: ChipHostComponent;
  let chip: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipHostComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(ChipHostComponent);
    host = fixture.componentInstance;
    await fixture.whenStable();
    chip = fixture.nativeElement.querySelector('c-chip');
  });

  it('loads and displays Chip component', () => {
    expect(chip.classList.contains('chip')).toBe(true);
    expect(chip.textContent?.trim()).toBe('Vue');
    expect(chip.getAttribute('role')).toBeNull();
    expect(chip.getAttribute('tabindex')).toBeNull();
  });

  it('Chip customize', async () => {
    host.active.set(true);
    host.clickable.set(true);
    host.color.set('primary');
    host.size.set('lg');
    host.variant.set('outline');
    await fixture.whenStable();
    expect(chip.classList.contains('active')).toBe(true);
    expect(chip.classList.contains('chip-clickable')).toBe(true);
    expect(chip.classList.contains('chip-primary')).toBe(true);
    expect(chip.classList.contains('chip-lg')).toBe(true);
    expect(chip.classList.contains('chip-outline')).toBe(true);

    host.disabled.set(true);
    await fixture.whenStable();
    expect(chip.classList.contains('disabled')).toBe(true);
    expect(chip.getAttribute('aria-disabled')).toBeNull();
  });

  it('Chip removable', async () => {
    host.removable.set(true);
    await fixture.whenStable();
    const button = chip.querySelector<HTMLButtonElement>('button.chip-remove')!;
    expect(button.getAttribute('aria-label')).toBe('Remove Vue');
    expect(button.getAttribute('tabindex')).toBe('-1');
    expect(chip.getAttribute('tabindex')).toBe('0');
    expect(chip.getAttribute('role')).toBeNull();
    expect(chip.getAttribute('aria-pressed')).toBeNull();

    button.click();
    expect(host.removed.length).toBe(1);
    expect(host.changes.length).toBe(0);
  });

  it('Chip selectable', async () => {
    host.selectable.set(true);
    await fixture.whenStable();
    expect(chip.getAttribute('role')).toBe('button');
    expect(chip.getAttribute('aria-pressed')).toBe('false');
    expect(chip.getAttribute('aria-selected')).toBeNull();
    expect(chip.classList.contains('chip-clickable')).toBe(true);

    chip.click();
    await fixture.whenStable();
    expect(chip.getAttribute('aria-pressed')).toBe('true');
    expect(chip.classList.contains('active')).toBe(true);
    expect(host.selected()).toBe(true);

    press(chip, 'Enter');
    await fixture.whenStable();
    expect(chip.getAttribute('aria-pressed')).toBe('false');

    press(chip, ' ');
    await fixture.whenStable();
    expect(host.changes).toEqual([true, false, true]);
  });

  it('a selectable removable chip keeps a named remove button out of its own name', async () => {
    host.selectable.set(true);
    host.removable.set(true);
    await fixture.whenStable();
    expect(chip.getAttribute('role')).toBe('button');
    expect(chip.getAttribute('aria-label')).toBe('Vue');
    const button = chip.querySelector<HTMLButtonElement>('button.chip-remove')!;
    expect(button.getAttribute('aria-label')).toBe('Remove Vue');

    button.click();
    await fixture.whenStable();
    expect(host.removed.length).toBe(1);
    expect(host.changes).toEqual([]);

    host.removable.set(false);
    await fixture.whenStable();
    expect(chip.getAttribute('aria-label')).toBeNull();
  });

  it('leaves Enter and Space on the remove button to the button', async () => {
    host.selectable.set(true);
    host.removable.set(true);
    host.role.set('listitem');
    await fixture.whenStable();
    const button = chip.querySelector<HTMLButtonElement>('button.chip-remove')!;
    for (const key of ['Enter', ' ']) {
      const event = new KeyboardEvent('keydown', { key, keyCode: KEY_CODES[key], bubbles: true, cancelable: true });
      button.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(false);
    }
    await fixture.whenStable();
    expect(host.changes).toEqual([]);
  });

  it('keeps an aria-label bound by the page', async () => {
    host.label.set('Framework');
    await fixture.whenStable();
    expect(chip.getAttribute('aria-label')).toBe('Framework');

    host.selectable.set(true);
    host.removable.set(true);
    await fixture.whenStable();
    expect(chip.getAttribute('aria-label')).toBe('Framework');
  });

  it('Chip filter shows a check icon while selected and implies selectable', async () => {
    host.filter.set(true);
    await fixture.whenStable();
    expect(chip.getAttribute('role')).toBe('button');
    expect(chip.querySelector('.chip-check')).toBeNull();

    chip.click();
    await fixture.whenStable();
    const check = chip.querySelector('.chip-check')!;
    expect(check.getAttribute('aria-hidden')).toBe('true');
    expect(check.querySelector('svg')).not.toBeNull();
  });

  it('Chip filter renders a custom selectedIcon', async () => {
    host.filter.set(true);
    host.customIcon.set(true);
    host.selected.set(true);
    await fixture.whenStable();
    expect(chip.querySelector('.chip-check .custom-check')).not.toBeNull();
    expect(chip.querySelector('.chip-check svg')).toBeNull();
  });

  it('Space on a removable chip does not scroll the page', async () => {
    host.removable.set(true);
    await fixture.whenStable();
    const event = new KeyboardEvent('keydown', { key: ' ', keyCode: 32, bubbles: true, cancelable: true });
    chip.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(host.removed.length).toBe(0);

    host.removable.set(false);
    await fixture.whenStable();
    const plain = new KeyboardEvent('keydown', { key: ' ', keyCode: 32, bubbles: true, cancelable: true });
    chip.dispatchEvent(plain);
    expect(plain.defaultPrevented).toBe(false);
  });

  it('Chip delete triggers remove callback', async () => {
    host.removable.set(true);
    await fixture.whenStable();
    press(chip, 'Backspace');
    press(chip, 'Delete');
    expect(host.removed.length).toBe(2);
  });

  it('a disabled chip has no remove button, no tab stop and ignores keys', async () => {
    host.removable.set(true);
    host.selectable.set(true);
    host.disabled.set(true);
    await fixture.whenStable();
    expect(chip.querySelector('.chip-remove')).toBeNull();
    expect(chip.getAttribute('tabindex')).toBeNull();
    expect(chip.getAttribute('aria-disabled')).toBe('true');
    press(chip, 'Delete');
    chip.click();
    expect(host.removed.length).toBe(0);
    expect(host.changes.length).toBe(0);
  });

  it('uses its own ariaRemoveLabel verbatim', async () => {
    host.removable.set(true);
    host.ariaRemoveLabel.set('Usuń Vue');
    await fixture.whenStable();
    expect(chip.querySelector('.chip-remove')?.getAttribute('aria-label')).toBe('Usuń Vue');
  });

  it('takes the role set by the page', async () => {
    host.selectable.set(true);
    host.role.set('switch');
    await fixture.whenStable();
    expect(chip.getAttribute('role')).toBe('switch');
    expect(chip.getAttribute('aria-pressed')).toBeNull();
  });

  it('identifies itself by value, then by text', async () => {
    expect(chip.getAttribute('data-coreui-chip-value')).toBe('Vue');
    host.value.set('vue');
    await fixture.whenStable();
    expect(chip.getAttribute('data-coreui-chip-value')).toBe('vue');
  });
});

@Component({
  imports: [ChipComponent],
  template: `
    <c-chip removable id="icon"
      ><svg class="icon" role="img"><title>Star</title></svg><span aria-hidden="true">close</span>Angular</c-chip
    >
    <c-chip removable tabindex="2" id="tab">Tab</c-chip>
    <c-chip selectable removable aria-label="Fruit" id="label">Apple</c-chip>
    <c-chip [attr.aria-label]="'Bound'" id="bound">Plain</c-chip>
    <c-chip selectable removable [attr.aria-label]="'Bound toggle'" id="bound-toggle">Toggle</c-chip>
  `
})
class ChipTextHostComponent {}

describe('ChipComponent text and attributes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
  });

  it('reads its text without icons and hidden content', async () => {
    const fixture = TestBed.createComponent(ChipTextHostComponent);
    await fixture.whenStable();
    const chip = fixture.nativeElement.querySelector('#icon') as HTMLElement;
    expect(chip.getAttribute('data-coreui-chip-value')).toBe('Angular');
    expect(chip.querySelector('.chip-remove')?.getAttribute('aria-label')).toBe('Remove Angular');
  });

  it('a static tabindex on a standalone chip wins', async () => {
    const fixture = TestBed.createComponent(ChipTextHostComponent);
    await fixture.whenStable();
    const chip = fixture.debugElement.children[1].componentInstance as ChipComponent;
    expect(chip.tabindex()).toBe(2);
    expect((fixture.nativeElement.querySelector('#tab') as HTMLElement).getAttribute('tabindex')).toBe('2');
  });

  it('keeps an aria-label set by the page', async () => {
    const fixture = TestBed.createComponent(ChipTextHostComponent);
    await fixture.whenStable();
    expect((fixture.nativeElement.querySelector('#label') as HTMLElement).getAttribute('aria-label')).toBe('Fruit');
    expect((fixture.nativeElement.querySelector('#bound') as HTMLElement).getAttribute('aria-label')).toBe('Bound');
    expect((fixture.nativeElement.querySelector('#bound-toggle') as HTMLElement).getAttribute('aria-label')).toBe(
      'Bound toggle'
    );
  });
});
