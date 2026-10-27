import { Component, Directive, ElementRef, inject, input, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { bindAriaInvalid } from './aria-invalid.utils';

@Directive({ selector: 'input[cTestAriaInvalid]' })
class TestAriaInvalidDirective {
  readonly valid = input<boolean>();
  readonly type = input<string>('text');
  readonly #ariaInvalidEffect = bindAriaInvalid(this.valid, this.type);
}

@Directive({ selector: 'input[cTestRendered]' })
class TestRenderedDirective {
  constructor() {
    inject(ElementRef).nativeElement.setAttribute('aria-invalid', 'true');
  }
}

@Component({
  imports: [TestRenderedDirective, TestAriaInvalidDirective],
  template: `
    <input id="plain" cTestAriaInvalid [valid]="valid()" [type]="type()" />
    <input id="page-true" cTestAriaInvalid aria-invalid="true" [valid]="valid()" />
    <input id="page-false" cTestAriaInvalid aria-invalid="false" [valid]="valid()" />
    <input id="bound-false-upper" cTestAriaInvalid [attr.aria-invalid]="pageFalseUpper()" [valid]="valid()" />
    <input id="bound-empty" cTestAriaInvalid [attr.aria-invalid]="pageEmpty()" [valid]="valid()" />
    <input id="page-grammar" cTestAriaInvalid aria-invalid="grammar" [valid]="valid()" />
    <input id="page-bound" cTestAriaInvalid [attr.aria-invalid]="page()" />
    <input id="rendered" cTestAriaInvalid cTestRendered [valid]="renderedValid()" />
  `
})
class TestHostComponent {
  readonly valid = signal<boolean | undefined>(undefined);
  readonly type = signal('text');
  readonly page = signal<string | null>('true');
  readonly pageFalseUpper = signal('FALSE');
  readonly pageEmpty = signal('');
  readonly renderedValid = signal<boolean | undefined>(false);
}

describe('bindAriaInvalid', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  const ariaInvalid = (id: string) => fixture.nativeElement.querySelector(`#${id}`).getAttribute('aria-invalid');

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should set aria-invalid only while valid is false', async () => {
    expect(ariaInvalid('plain')).toBeNull();
    host.valid.set(false);
    await fixture.whenStable();
    expect(ariaInvalid('plain')).toBe('true');
    host.valid.set(true);
    await fixture.whenStable();
    expect(ariaInvalid('plain')).toBeNull();
    host.valid.set(false);
    await fixture.whenStable();
    host.valid.set(undefined);
    await fixture.whenStable();
    expect(ariaInvalid('plain')).toBeNull();
  });

  it('should keep aria-invalid set by the page', async () => {
    expect(ariaInvalid('page-true')).toBe('true');
    expect(ariaInvalid('page-grammar')).toBe('grammar');
    expect(ariaInvalid('page-bound')).toBe('true');
    host.valid.set(false);
    await fixture.whenStable();
    expect(ariaInvalid('page-true')).toBe('true');
    expect(ariaInvalid('page-grammar')).toBe('grammar');
    host.valid.set(true);
    await fixture.whenStable();
    expect(ariaInvalid('page-true')).toBe('true');
    expect(ariaInvalid('page-grammar')).toBe('grammar');
    host.valid.set(false);
    await fixture.whenStable();
    host.valid.set(undefined);
    await fixture.whenStable();
    expect(ariaInvalid('page-true')).toBe('true');
    expect(ariaInvalid('page-grammar')).toBe('grammar');
  });

  it('should remove aria-invalid found on the host while invalid, as after hydration', async () => {
    expect(ariaInvalid('rendered')).toBe('true');
    host.renderedValid.set(undefined);
    await fixture.whenStable();
    expect(ariaInvalid('rendered')).toBeNull();
  });

  it('should replace aria-invalid="false" set by the page while invalid and bring it back after', async () => {
    host.valid.set(false);
    await fixture.whenStable();
    expect(ariaInvalid('page-false')).toBe('true');
    expect(ariaInvalid('bound-false-upper')).toBe('true');
    expect(ariaInvalid('bound-empty')).toBe('true');
    host.valid.set(true);
    await fixture.whenStable();
    expect(ariaInvalid('page-false')).toBe('false');
    expect(ariaInvalid('bound-false-upper')).toBeNull();
    expect(ariaInvalid('bound-empty')).toBeNull();
    host.valid.set(false);
    await fixture.whenStable();
    host.valid.set(undefined);
    await fixture.whenStable();
    expect(ariaInvalid('page-false')).toBe('false');
  });

  it.each(['button', 'color', 'hidden', 'image', 'reset', 'submit', 'Submit'])(
    'should skip an input of type %s',
    async (type) => {
      host.valid.set(false);
      await fixture.whenStable();
      expect(ariaInvalid('plain')).toBe('true');
      host.type.set(type);
      await fixture.whenStable();
      expect(ariaInvalid('plain')).toBeNull();
    }
  );

  it.each(['email', 'file', 'range'])('should set aria-invalid on an input of type %s', async (type) => {
    host.type.set(type);
    host.valid.set(false);
    await fixture.whenStable();
    expect(ariaInvalid('plain')).toBe('true');
  });
});
