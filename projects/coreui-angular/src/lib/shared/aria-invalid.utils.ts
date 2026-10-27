import { effect, EffectRef, ElementRef, HostAttributeToken, inject, Renderer2, Signal } from '@angular/core';

const TYPES_WITHOUT_ARIA_INVALID = ['button', 'color', 'hidden', 'image', 'reset', 'submit'];

/**
 * Sets `aria-invalid="true"` on the host form control while `valid()` is `false`. Call it in the injection context of the directive.
 * Keeps a value already on the host unless it is empty or `"false"` in any case, and skips inputs whose type takes no
 * `aria-invalid` (button-like, `color`, `hidden`), leaving the attribute to the page there. Once the control is no longer invalid,
 * it writes back the static `aria-invalid` of the template, or removes the attribute when the template has none, so a value it
 * found while invalid, rendered on the server or bound by the page, is removed as well.
 * @param valid validation state: `false` invalid, `true` or `undefined` not invalid
 * @param type input type of the host, read on every change
 * @returns the effect that keeps the attribute in sync
 */
export const bindAriaInvalid = (valid: Signal<boolean | undefined>, type?: Signal<unknown>): EffectRef => {
  const host: HTMLElement = inject(ElementRef).nativeElement;
  const renderer = inject(Renderer2);
  const templateValue = inject(new HostAttributeToken('aria-invalid'), { optional: true });
  let invalidated = false;
  return effect(() => {
    const invalid = valid() === false && !TYPES_WITHOUT_ARIA_INVALID.includes(String(type?.() ?? '').toLowerCase());
    if (invalid) {
      const current = host.getAttribute('aria-invalid');
      if (!current || current.toLowerCase() === 'false') {
        renderer.setAttribute(host, 'aria-invalid', 'true');
      }
      invalidated = true;
    } else if (invalidated) {
      if (templateValue === null) {
        renderer.removeAttribute(host, 'aria-invalid');
      } else {
        renderer.setAttribute(host, 'aria-invalid', templateValue);
      }
      invalidated = false;
    }
  });
};
