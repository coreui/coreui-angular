import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[cLabel]',
  host: { class: 'form-label', '[class]': 'hostClasses()' }
})
export class FormLabelDirective {
  /**
   * For horizontal forms set labels to 'col' and make them vertically centered with their associated form controls.
   * @default ''
   */
  readonly col = input<'col' | ''>('', { alias: 'cLabel' });
  /**
   * Size the label small or large.
   * @default ''
   */
  readonly sizing = input<'' | 'sm' | 'lg' | string>();

  readonly hostClasses = computed(() => {
    const col = this.col();
    const sizing = this.sizing();
    return {
      'form-label': true,
      'col-form-label': col === 'col',
      [`col-form-label-${sizing}`]: !!sizing && col === 'col'
    } as Record<string, boolean>;
  });
}
