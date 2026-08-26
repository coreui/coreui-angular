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
   * @returns 'start' | 'center' | 'end' | ''
   */
  readonly align = input<'start' | 'center' | 'end' | ''>('');
  /**
   * Size the component small or large.
   * @returns '' | 'sm' | 'lg'
   */
  readonly size = input<'' | 'sm' | 'lg'>();
  /**
   * Default role for pagination
   * @returns string
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
