import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  input,
  OnChanges,
  provideZonelessChangeDetection,
  signal
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  AbstractControl,
  AsyncValidator,
  FormsModule,
  NG_ASYNC_VALIDATORS,
  NgModel,
  ValidationErrors
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AnnouncerService } from '../services/announcer.service';
import { ChipInputComponent } from './chip-input.component';

@Component({
  imports: [FormsModule, ChipInputComponent],
  template: `
    <c-chip-input minlength="2" [required]="required()" [(ngModel)]="tags" />
    <button id="outside">Outside</button>
  `
})
class TemplateValidatorsHostComponent {
  tags: string[] = ['a', 'b'];
  readonly required = signal(true);
}

@Directive({
  selector: '[cTaken]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: TakenValidatorDirective, multi: true }]
})
class TakenValidatorDirective implements AsyncValidator, OnChanges {
  readonly cTaken = input('');
  #onChange?: () => void;

  ngOnChanges(): void {
    this.#onChange?.();
  }

  registerOnValidatorChange(fn: () => void): void {
    this.#onChange = fn;
  }

  validate(control: AbstractControl<string[]>): Promise<ValidationErrors | null> {
    return Promise.resolve(control.value?.includes(this.cTaken()) ? { taken: true } : null);
  }
}

@Component({
  imports: [FormsModule, ChipInputComponent, TakenValidatorDirective],
  template: `<c-chip-input [cTaken]="taken()" [(ngModel)]="tags" />`
})
class AsyncValidatorHostComponent {
  tags = ['a'];
  readonly taken = signal('a');
}

@Component({
  imports: [FormsModule, ChipInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form>
      <c-chip-input name="tags" minlength="2" [(ngModel)]="tags" #model="ngModel" />
      <button [disabled]="model.invalid">Save</button>
    </form>
  `
})
class FirstRenderHostComponent {
  tags = ['a'];
}

describe('ChipInputComponent template validators', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    vi.spyOn(TestBed.inject(AnnouncerService), 'announce').mockReturnValue(vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('applies required and minlength written next to ngModel', async () => {
    const fixture = TestBed.createComponent(TemplateValidatorsHostComponent);
    document.body.append(fixture.nativeElement);
    await fixture.whenStable();
    const element = fixture.nativeElement.querySelector('c-chip-input') as HTMLElement;
    const field = element.querySelector('input')!;
    const control = fixture.debugElement.query(By.directive(NgModel)).injector.get(NgModel).control;
    expect(control.errors).toBeNull();

    element.querySelector<HTMLButtonElement>('c-chip button.chip-remove')!.click();
    await fixture.whenStable();
    expect(control.errors).toEqual({ minlength: { requiredLength: 2, actualLength: 1 } });

    element.querySelector<HTMLButtonElement>('c-chip button.chip-remove')!.click();
    field.dispatchEvent(
      new FocusEvent('focusout', { bubbles: true, relatedTarget: fixture.nativeElement.querySelector('#outside') })
    );
    await fixture.whenStable();
    expect(control.errors).toEqual({ required: true });
    expect(element.classList.contains('is-invalid')).toBe(true);
    expect(field.getAttribute('aria-invalid')).toBe('true');
    expect(field.getAttribute('aria-required')).toBe('true');

    fixture.componentInstance.required.set(false);
    await fixture.whenStable();
    expect(control.errors).toBeNull();
    fixture.nativeElement.remove();
  });

  it('is invalid from the first render inside a form', async () => {
    const fixture = TestBed.createComponent(FirstRenderHostComponent);
    const model = fixture.debugElement.query(By.directive(NgModel)).injector.get(NgModel);
    await fixture.whenStable();
    expect(model.control.errors).toEqual({ minlength: { requiredLength: 2, actualLength: 1 } });
    expect(fixture.nativeElement.querySelector('form > button').disabled).toBe(true);
  });

  it('applies an async validator written next to ngModel and follows its changes', async () => {
    const fixture = TestBed.createComponent(AsyncValidatorHostComponent);
    const model = fixture.debugElement.query(By.directive(NgModel)).injector.get(NgModel);
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    expect(model.control.errors).toEqual({ taken: true });

    fixture.componentInstance.taken.set('b');
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    expect(model.control.errors).toBeNull();
  });
});
