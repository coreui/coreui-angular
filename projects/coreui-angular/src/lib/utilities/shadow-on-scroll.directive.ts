import { DOCUMENT } from '@angular/common';
import { DestroyRef, Directive, effect, ElementRef, inject, Input, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[cShadowOnScroll]',
  standalone: true
})
export class ShadowOnScrollDirective {

  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #document: Document = inject(DOCUMENT);
  readonly #elementRef: ElementRef = inject(ElementRef);
  readonly #scrolled: WritableSignal<boolean> = signal(false);

  readonly #scrollEffect = effect(() => {
    this.#elementRef.nativeElement.classList.toggle(this.#shadowClass, this.#scrolled());
  });

  #observable!: Subscription;
  #shadowClass = 'shadow-sm';

  constructor() {
    this.#destroyRef.onDestroy(() => {
      this.#scrollEffect?.destroy();
    });
  }

  @Input()
  set cShadowOnScroll(value: 'sm' | 'lg' | 'none' | boolean) {
    this.#scrolled.set(false);
    if (value) {
      this.#shadowClass = value === true ? 'shadow' : `shadow-${value}`;
      this.#observable = fromEvent(this.#document, 'scroll')
        .pipe(
          takeUntilDestroyed(this.#destroyRef)
        )
        .subscribe(scrolled => {
          this.#scrolled.set(this.#document.documentElement.scrollTop > 0);
        });
    } else {
      this.#observable?.unsubscribe();
    }
  };
}
