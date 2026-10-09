import {
  AfterContentInit,
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  input,
  model,
  numberAttribute,
  output,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, Validator } from '@angular/forms';
import { take } from 'rxjs';
import { ChipComponent } from '../chip/chip.component';
import { ChipSetRef } from '../chip/chip-set-ref';
import { ChipSetService } from '../chip-set/chip-set.service';
import { RtlService } from '../services/rtl.service';
import { UIDService } from '../services/uid.service';

@Component({
  selector: 'c-chip-input',
  exportAs: 'cChipInput',
  templateUrl: './chip-input.component.html',
  imports: [ChipComponent],
  providers: [ChipSetService, { provide: ChipSetRef, useExisting: ChipSetService }],
  host: {
    class: 'chip-input',
    '[class]': 'hostClasses()',
    '[attr.id]': 'null',
    '[attr.aria-describedby]': 'null',
    '[attr.aria-label]': 'null',
    '[attr.aria-labelledby]': 'null',
    '(click)': 'onClick($event)',
    '(mousedown)': 'onMousedown($event)',
    '(keydown)': 'onKeydown($event)',
    '(focusin)': 'onFocusin($event)',
    '(focusout)': 'onFocusout($event)'
  }
})
export class ChipInputComponent implements AfterContentInit {
  readonly #elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly #ngModel = inject(NgModel, { self: true, optional: true });
  readonly #asyncValidators = inject<(AsyncValidator | unknown)[]>(NG_ASYNC_VALIDATORS, { self: true, optional: true });
  readonly #validators = inject<(Validator | unknown)[]>(NG_VALIDATORS, { self: true, optional: true });
  readonly #rtl = inject(RtlService);
  readonly #service = inject(ChipSetService);

  readonly field = viewChild.required<ElementRef<HTMLInputElement>>('field');
  readonly projectedChips = contentChildren(ChipComponent);

  /**
   * Wording announced to screen readers after a chip is added; the chip value is prepended.
   * @returns string
   * @default 'added'
   */
  readonly ariaAddedAnnouncement = input('added');

  /**
   * Id of the element that describes the text field, e.g. a hint or a `c-form-feedback`.
   * @returns string | undefined
   * @default undefined
   */
  readonly ariaDescribedBy = input<string>(undefined, { alias: 'aria-describedby' });

  /**
   * Accessible name of the text field when there is no visible label.
   * @returns string | undefined
   * @default undefined
   */
  readonly ariaLabel = input<string>(undefined, { alias: 'aria-label' });

  /**
   * Id of the element that names the text field.
   * @returns string | undefined
   * @default undefined
   */
  readonly ariaLabelledBy = input<string>(undefined, { alias: 'aria-labelledby' });

  /**
   * Label of the remove buttons; each chip appends its value, e.g. `'Remove Angular'`.
   * @returns string
   * @default 'Remove'
   */
  readonly ariaRemoveLabel = input('Remove');

  /**
   * Wording announced to screen readers after a chip is removed; the chip value is prepended.
   * @returns string
   * @default 'removed'
   */
  readonly ariaRemovedAnnouncement = input('removed');

  /**
   * Extra class for every chip, or a function that returns the class for a chip value.
   * @returns string | ((value: string) => string) | undefined
   * @default undefined
   */
  readonly chipClassName = input<string | ((value: string) => string)>();

  /**
   * Turns the text left in the field into a chip when focus leaves the component.
   * @returns boolean
   * @default true
   */
  readonly createOnBlur = input(true, { transform: booleanAttribute });

  /**
   * Disables the field and every chip.
   * @returns boolean
   * @default false
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * Makes the chips filter chips: selectable, with a check icon while selected.
   * @returns boolean
   * @default false
   */
  readonly filter = input(false, { transform: booleanAttribute });

  /**
   * Id of the text field, the target of an external `<label for>`.
   * @returns string
   * @default generated
   */
  readonly id = input(inject(UIDService).getUID('chip-input'));

  /**
   * Set by the form when the value is invalid; shown once the control is touched.
   * @returns boolean
   * @default false
   */
  readonly invalid = input(false, { transform: booleanAttribute });

  /**
   * Renders an inline label inside the Angular Chip Input component container.
   * @returns string | undefined
   * @default undefined
   */
  readonly label = input<string>();

  /**
   * Maximum number of chips; `null` for no limit.
   * @returns number | null
   * @default null
   */
  readonly maxChips = input<number | null, unknown>(null, {
    transform: (value: unknown) => {
      const maxChips = numberAttribute(value);
      return Number.isNaN(maxChips) ? null : maxChips;
    }
  });

  /**
   * Placeholder of the text field.
   * @returns string
   * @default ''
   */
  readonly placeholder = input('');

  /**
   * Keeps the chips visible but blocks adding, removing and selecting them.
   * @returns boolean
   * @default false
   */
  readonly readonly = input(false, { transform: booleanAttribute });

  /**
   * Shows remove buttons on the chips.
   * @returns boolean
   * @default true
   */
  readonly removable = input(true, { transform: booleanAttribute });

  /**
   * Set by the form when a value is required; adds `aria-required` to the text field.
   * @returns boolean
   * @default false
   */
  readonly required = input(false, { transform: booleanAttribute });

  /**
   * Makes the chips selectable.
   * @returns boolean
   * @default false
   */
  readonly selectable = input(false, { transform: booleanAttribute });

  /**
   * Values of the selected chips, two-way bindable with `[(selected)]`.
   * @returns string[]
   * @default []
   */
  readonly selected = model<string[]>([]);

  /**
   * Sets how many chips can be selected at once.
   * @returns 'single' | 'multiple'
   * @default 'multiple'
   */
  readonly selectionMode = input<'single' | 'multiple'>('multiple');

  /**
   * Character that splits typed or pasted text into chips; `null` turns splitting off.
   * @returns string | null
   * @default ','
   */
  readonly separator = input<string | null>(',');

  /**
   * Size of the component.
   * @returns 'sm' | 'lg' | undefined
   * @default undefined
   */
  readonly size = input<'sm' | 'lg'>();

  /**
   * Set by the form once the control has been touched.
   * @returns boolean
   * @default false
   */
  readonly touched = input(false, { transform: booleanAttribute });

  /**
   * Validation state set by the page; it wins over the state reported by the form.
   * @returns 'valid' | 'invalid' | undefined
   * @default undefined
   */
  readonly validationState = input<'valid' | 'invalid'>();

  /**
   * Chip values, two-way bindable with `[(value)]` or bound by a form.
   * @returns string[]
   * @default []
   */
  readonly value = model<string[]>([]);

  /**
   * Emits the value of a chip added by the user.
   * @returns string
   */
  readonly add = output<string>();

  /**
   * Emits the text of the field when it changes.
   * @returns string
   */
  readonly inputChange = output<string>();

  /**
   * Emits the value of a chip removed by the user.
   * @returns string
   */
  readonly remove = output<string>();

  /**
   * Emits when focus leaves the component.
   */
  readonly touch = output<void>();

  readonly text = signal('');

  readonly items = computed(() => [
    ...new Set((this.value() ?? []).map((value) => String(value).trim()).filter(Boolean))
  ]);

  readonly canAdd = computed(() => {
    const maxChips = this.maxChips();
    return maxChips === null || this.items().length < maxChips;
  });

  readonly state = computed(() => this.validationState() ?? (this.invalid() && this.touched() ? 'invalid' : undefined));

  readonly fieldSize = computed(() => Math.max(this.placeholder().length, this.text().length, 1));

  readonly hostClasses = computed(() => ({
    [`chip-input-${this.size()}`]: !!this.size(),
    disabled: this.disabled(),
    'is-invalid': this.state() === 'invalid',
    'is-valid': this.state() === 'valid'
  }));

  constructor() {
    this.#service.attach({
      ariaAddedAnnouncement: this.ariaAddedAnnouncement,
      ariaRemoveLabel: this.ariaRemoveLabel,
      ariaRemovedAnnouncement: this.ariaRemovedAnnouncement,
      disabled: this.disabled,
      element: this.#elementRef.nativeElement,
      filter: this.filter,
      initialStop: 'last',
      isListbox: computed(() => false),
      readonly: this.readonly,
      removable: computed(() => this.removable() && !this.disabled() && !this.readonly()),
      removeIcon: computed(() => undefined),
      selectable: this.selectable,
      selected: this.selected,
      selectedIcon: computed(() => undefined),
      selectionMode: this.selectionMode,
      focusFallback: () => this.focus(),
      removeRequested: (value) => this.#removeChip(value)
    });
    this.#attachValidators();
    this.#ngModel?.control.valueChanges.pipe(take(1), takeUntilDestroyed()).subscribe(() => this.#service.resync());
  }

  ngAfterContentInit(): void {
    this.#watchValidators();
    if (this.projectedChips().length > 0) {
      console.warn('CoreUI [c-chip] placed inside c-chip-input is ignored - chips come from its value');
    }
  }

  focus(): void {
    this.field().nativeElement.focus();
  }

  chipClass(value: string): string | null {
    const className = this.chipClassName();
    return (typeof className === 'function' ? className(value) : className) ?? null;
  }

  onClick($event: MouseEvent): void {
    if ($event.target === this.#elementRef.nativeElement) {
      this.focus();
    }
  }

  onMousedown($event: MouseEvent): void {
    const target = $event.target as Element;
    if (target === this.#elementRef.nativeElement || target.closest?.('.chip-input-label')) {
      $event.preventDefault();
    }
  }

  onKeydown($event: KeyboardEvent): void {
    if ($event.target === this.field().nativeElement) {
      return;
    }
    const intoField = this.#isRtl() ? 'ArrowLeft' : 'ArrowRight';
    if ($event.key === intoField && this.#service.isLastFocusable($event.target)) {
      $event.preventDefault();
      this.focus();
      return;
    }
    this.#service.handleKeydown($event);
    if (!$event.defaultPrevented && this.#isPrintable($event)) {
      this.focus();
    }
  }

  onFocusin($event: FocusEvent): void {
    this.#service.handleFocusin($event);
    if ($event.target === this.field().nativeElement) {
      this.#service.resetStop();
      if (!this.readonly() && this.selected().length > 0) {
        this.selected.set([]);
      }
    }
  }

  onFocusout($event: FocusEvent): void {
    this.#service.handleFocusout($event);
    const next = $event.relatedTarget;
    if (next) {
      if (!this.#contains(next)) {
        this.#leave();
      }
      return;
    }
    const target = $event.target as Node;
    queueMicrotask(() => {
      const document = target.ownerDocument;
      if (target.isConnected && document?.hasFocus() && !this.#contains(document.activeElement)) {
        this.#leave();
      }
    });
  }

  onFieldInput($event: Event): void {
    const value = ($event.target as HTMLInputElement).value;
    const separator = this.separator();
    if (separator && value.includes(separator) && this.canAdd()) {
      const parts = value.split(separator);
      const left = this.#addChips(parts.slice(0, -1));
      this.#setText([...left, parts.at(-1) ?? ''].join(separator));
      return;
    }
    this.#setText(value);
  }

  onFieldKeydown($event: KeyboardEvent): void {
    if ($event.isComposing || $event.keyCode === 229) {
      return;
    }
    const field = this.field().nativeElement;
    switch ($event.key) {
      case 'Enter': {
        $event.preventDefault();
        this.#createFromText();
        break;
      }
      case 'Backspace':
      case 'Delete': {
        if (this.text() === '' && !$event.repeat && this.#service.focusLast()) {
          $event.preventDefault();
        }
        break;
      }
      case 'ArrowLeft':
      case 'ArrowRight': {
        const towardChips = this.#isRtl() ? 'ArrowRight' : 'ArrowLeft';
        if (
          $event.key === towardChips &&
          field.selectionStart === 0 &&
          field.selectionEnd === 0 &&
          this.#service.focusLast()
        ) {
          $event.preventDefault();
        }
        break;
      }
      case 'Escape': {
        this.#setText('');
        field.blur();
        break;
      }
    }
  }

  onFieldPaste($event: ClipboardEvent): void {
    const separator = this.separator();
    const pasted = $event.clipboardData?.getData('text') ?? '';
    if (this.disabled() || this.readonly() || !separator || !pasted.includes(separator) || !this.canAdd()) {
      return;
    }
    $event.preventDefault();
    const field = this.field().nativeElement;
    const start = field.selectionStart ?? field.value.length;
    const end = field.selectionEnd ?? start;
    const text = field.value.slice(0, start) + pasted + field.value.slice(end);
    this.#setText(this.#addChips(text.split(separator)).join(separator));
  }

  #attachValidators(): void {
    const control = this.#ngModel?.control;
    const validator = this.#ngModel?.validator;
    const asyncValidator = this.#ngModel?.asyncValidator;
    if (validator && control && !control.hasValidator(validator)) {
      control.addValidators(validator);
    }
    if (asyncValidator && control && !control.hasAsyncValidator(asyncValidator)) {
      control.addAsyncValidators(asyncValidator);
    }
  }

  #watchValidators(): void {
    const control = this.#ngModel?.control;
    if (!control) {
      return;
    }
    for (const item of [...(this.#validators ?? []), ...(this.#asyncValidators ?? [])]) {
      (item as Validator | AsyncValidator).registerOnValidatorChange?.(() => control.updateValueAndValidity());
    }
  }

  #leave(): void {
    if (this.createOnBlur()) {
      this.#createFromText();
    }
    this.touch.emit();
  }

  #createFromText(): void {
    const separator = this.separator();
    const text = this.text();
    const count = this.items().length;
    const left = this.#addChips(separator ? text.split(separator) : [text]);
    if (this.items().length > count) {
      this.#setText(left.join(separator ?? ''));
    }
  }

  #addChips(values: string[]): string[] {
    if (this.disabled() || this.readonly()) {
      return values;
    }
    const maxChips = this.maxChips();
    const next = [...this.items()];
    const added: string[] = [];
    const left: string[] = [];
    for (const raw of values) {
      const value = raw.trim();
      if (!value || next.includes(value)) {
        continue;
      }
      if (maxChips !== null && next.length >= maxChips) {
        left.push(raw);
        continue;
      }
      next.push(value);
      added.push(value);
    }
    if (added.length > 0) {
      this.value.set(next);
      added.forEach((value) => this.add.emit(value));
    }
    return left;
  }

  #removeChip(value: string): void {
    if (this.disabled() || this.readonly() || !this.items().includes(value)) {
      return;
    }
    this.value.set(this.items().filter((item) => item !== value));
    if (this.selected().includes(value)) {
      this.selected.set(this.selected().filter((item) => item !== value));
    }
    this.remove.emit(value);
  }

  #setText(value: string): void {
    const field = this.field().nativeElement;
    if (field.value !== value) {
      field.value = value;
    }
    if (this.text() !== value) {
      this.text.set(value);
      this.inputChange.emit(value);
    }
  }

  #contains(target: EventTarget | null): boolean {
    return target instanceof Node && this.#elementRef.nativeElement.contains(target);
  }

  #isPrintable($event: KeyboardEvent): boolean {
    return $event.key.length === 1 && !$event.metaKey && (!$event.ctrlKey || $event.altKey);
  }

  #isRtl(): boolean {
    return this.#rtl.isRTL(this.#elementRef.nativeElement);
  }
}
