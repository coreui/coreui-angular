import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-pagination',
  templateUrl: './pagination.component.html',
  host: {
    '[attr.role]': 'role()'
  }
})
export class PaginationComponent {
  /**
   * Set the alignment of pagination components.
   * @values 'start', 'center', 'end'
   */
  readonly align = input<'start' | 'center' | 'end' | ''>('');
  /**
   * Size the component small or large.
   * @values 'sm', 'lg'
   */
  readonly size = input<'' | 'sm' | 'lg' | string>();
  /**
   * Default role for pagination. [docs]
   * @return string
   * @default 'navigation'
   */
  readonly role = input<string>('navigation');

  readonly paginationClass = computed(() => {
    const size = this.size();
    const align = this.align();
    return {
      pagination: true,
      [`pagination-${size}`]: !!size,
      [`justify-content-${align}`]: !!align
    } as Record<string, boolean>;
  });
}
