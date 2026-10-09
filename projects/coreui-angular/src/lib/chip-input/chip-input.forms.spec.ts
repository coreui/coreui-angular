import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, FormField, minLength, required } from '@angular/forms/signals';
import { AnnouncerService } from '../services/announcer.service';
import { ChipInputComponent } from './chip-input.component';

const enter = (field: HTMLInputElement, text: string) => {
  field.value = text;
  field.dispatchEvent(new Event('input', { bubbles: true }));
  field.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true, cancelable: true }));
};

const leave = (element: HTMLElement, to: EventTarget | null) =>
  element.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: to }));

const parts = (root: HTMLElement) => {
  const element = root.querySelector<HTMLElement>('c-chip-input')!;
  return {
    element,
    field: element.querySelector<HTMLInputElement>('input.chip-input-field')!,
    chips: () => [...element.querySelectorAll('c-chip')].map((chip) => chip.getAttribute('data-coreui-chip-value')),
    outside: root.querySelector<HTMLElement>('#outside')!
  };
};

@Component({
  imports: [ReactiveFormsModule, ChipInputComponent],
  template: `
    <form [formGroup]="form">
      <c-chip-input formControlName="tags" [validationState]="state()" />
    </form>
    <button id="outside">Outside</button>
  `
})
class ReactiveHostComponent {
  readonly form = new FormGroup({ tags: new FormControl<string[]>([], Validators.required) });
  readonly state = signal<'valid' | 'invalid' | undefined>(undefined);
}

@Component({
  imports: [FormsModule, ChipInputComponent],
  template: `
    <c-chip-input [(ngModel)]="tags" [disabled]="disabled()" />
    <button id="outside">Outside</button>
  `
})
class TemplateHostComponent {
  tags: string[] = ['a'];
  readonly disabled = signal(false);
}

@Component({
  imports: [FormField, ChipInputComponent],
  template: `
    <c-chip-input [formField]="tagsForm.tags" />
    <button id="outside">Outside</button>
  `
})
class SignalHostComponent {
  readonly model = signal({ tags: [] as string[] });
  readonly tagsForm = form(this.model, (path) => {
    required(path.tags);
    minLength(path.tags, 1, { message: 'Add at least one tag' });
  });
}

describe('ChipInputComponent forms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    vi.spyOn(TestBed.inject(AnnouncerService), 'announce').mockReturnValue(vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('formControlName', () => {
    let fixture: ComponentFixture<ReactiveHostComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(ReactiveHostComponent);
      document.body.append(fixture.nativeElement);
      await fixture.whenStable();
    });

    afterEach(() => fixture.nativeElement.remove());

    it('writes the value both ways', async () => {
      const control = fixture.componentInstance.form.controls.tags;
      const { field, chips } = parts(fixture.nativeElement);
      control.setValue(['a']);
      await fixture.whenStable();
      expect(chips()).toEqual(['a']);

      enter(field, 'b');
      await fixture.whenStable();
      expect(control.value).toEqual(['a', 'b']);
      expect(control.dirty).toBe(true);
    });

    it('follows the disabled state of the control', async () => {
      const { field } = parts(fixture.nativeElement);
      fixture.componentInstance.form.controls.tags.disable();
      await fixture.whenStable();
      expect(field.disabled).toBe(true);
    });

    it('shows the error only after focus leaves the component', async () => {
      const { element, field, outside } = parts(fixture.nativeElement);
      expect(field.getAttribute('aria-required')).toBe('true');
      expect(element.classList.contains('is-invalid')).toBe(false);
      expect(field.getAttribute('aria-invalid')).toBeNull();

      fixture.componentInstance.form.controls.tags.setValue(['a']);
      await fixture.whenStable();
      const chip = element.querySelector<HTMLElement>('c-chip')!;
      leave(field, chip);
      fixture.componentInstance.form.controls.tags.setValue([]);
      await fixture.whenStable();
      expect(fixture.componentInstance.form.controls.tags.touched).toBe(false);
      expect(element.classList.contains('is-invalid')).toBe(false);

      leave(field, outside);
      await fixture.whenStable();
      expect(fixture.componentInstance.form.controls.tags.touched).toBe(true);
      expect(element.classList.contains('is-invalid')).toBe(true);
      expect(field.getAttribute('aria-invalid')).toBe('true');
    });

    it('lets validationState win over the form', async () => {
      const { element, field, outside } = parts(fixture.nativeElement);
      leave(field, outside);
      fixture.componentInstance.state.set('valid');
      await fixture.whenStable();
      expect(element.classList.contains('is-valid')).toBe(true);
      expect(element.classList.contains('is-invalid')).toBe(false);
      expect(field.getAttribute('aria-invalid')).toBeNull();
    });
  });

  describe('ngModel', () => {
    it('writes the value both ways, follows disabled and does not announce the initial value', async () => {
      const fixture = TestBed.createComponent(TemplateHostComponent);
      document.body.append(fixture.nativeElement);
      await fixture.whenStable();
      const { field, chips } = parts(fixture.nativeElement);
      expect(chips()).toEqual(['a']);
      expect(TestBed.inject(AnnouncerService).announce).not.toHaveBeenCalled();

      enter(field, 'b');
      await fixture.whenStable();
      expect(fixture.componentInstance.tags).toEqual(['a', 'b']);
      expect(TestBed.inject(AnnouncerService).announce).toHaveBeenCalledWith('b added', expect.anything());

      fixture.componentInstance.disabled.set(true);
      await fixture.whenStable();
      expect(field.disabled).toBe(true);
      expect(fixture.debugElement.query(By.directive(NgModel)).injector.get(NgModel).control.disabled).toBe(true);
      fixture.nativeElement.remove();
    });

    it('announces the first chip added to an empty value', async () => {
      const fixture = TestBed.createComponent(TemplateHostComponent);
      fixture.componentInstance.tags = [];
      document.body.append(fixture.nativeElement);
      await fixture.whenStable();
      const { field } = parts(fixture.nativeElement);

      enter(field, 'b');
      await fixture.whenStable();
      expect(fixture.componentInstance.tags).toEqual(['b']);
      expect(TestBed.inject(AnnouncerService).announce).toHaveBeenCalledWith('b added', expect.anything());
      fixture.nativeElement.remove();
    });
  });

  describe('formField', () => {
    it('writes the value both ways and reports the error after leaving', async () => {
      const fixture = TestBed.createComponent(SignalHostComponent);
      document.body.append(fixture.nativeElement);
      await fixture.whenStable();
      const { element, field, chips, outside } = parts(fixture.nativeElement);
      expect(field.getAttribute('aria-required')).toBe('true');
      expect(element.classList.contains('is-invalid')).toBe(false);

      leave(field, outside);
      await fixture.whenStable();
      expect(element.classList.contains('is-invalid')).toBe(true);

      enter(field, 'a');
      await fixture.whenStable();
      expect(fixture.componentInstance.model().tags).toEqual(['a']);
      expect(element.classList.contains('is-invalid')).toBe(false);

      fixture.componentInstance.model.set({ tags: ['x', 'y'] });
      await fixture.whenStable();
      expect(chips()).toEqual(['x', 'y']);
      fixture.nativeElement.remove();
    });
  });
});
