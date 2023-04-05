import { Component, HostBinding, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'c-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [NgClass]
})
export class PaginationComponent {

  /**
   * Set the alignment of pagination components.
   * @values 'start', 'center', 'end'
   */
  @Input() align: 'start' | 'center' | 'end' | '' = '';
  /**
   * Size the component small or large.
   * @values 'sm', 'lg'
   */
  @Input() size?: 'sm' | 'lg';
  /**
   * Default role for pagination. [docs]
   * @type string
   * @default 'navigation'
   */
  @HostBinding('attr.role')
  @Input() role = 'navigation';

  get paginationClass(): any {
    return {
      pagination: true,
      [`pagination-${this.size}`]: !!this.size,
      [`justify-content-${this.align}`]: !!this.align
    };
  }

}
