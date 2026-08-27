import { computed, Directive, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { IconSetService } from '../icon-set';
import { IconSize, IIcon, IPointerEvents, NgCssClass } from './icon.interface';
import { escapeHtml, transformName } from './icon.utils';

@Directive({
  exportAs: 'cIcon',
  selector: 'svg[cIcon]',
  host: {
    '[innerHtml]': 'innerHtml()',
    '[class]': 'hostClasses()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.pointer-events]': 'pointerEvents()',
    '[attr.role]': 'role()',
    '[attr.aria-hidden]': 'true'
  }
})
export class IconDirective implements IIcon {
  readonly #sanitizer = inject(DomSanitizer);
  readonly #iconSet = inject(IconSetService);

  /**
   * The icon itself: either its SVG content or a `[viewBox, content]` pair. Use this or
   * `name`, as it decides how the icon is imported.
   */
  readonly content = input<string | string[] | any[] | undefined>(undefined, { alias: 'cIcon' });

  /**
   * Overwrites the default `.icon` classes.
   */
  readonly customClasses = input<NgCssClass>();

  /**
   * Size of the icon.
   */
  readonly size = input<IconSize>('');

  /**
   * Sets the SVG `title` tag.
   */
  readonly title = input<string>();

  /**
   * Sets the SVG `height` attribute.
   */
  readonly height = input<string>();

  /**
   * Sets the SVG `width` attribute.
   */
  readonly width = input<string>();

  /**
   * Name of an SVG icon stored in `IconSetService`.
   */
  readonly name = input('', { transform: transformName });

  /**
   * Sets the SVG `viewBox` attribute.
   */
  readonly viewBoxInput = input<string | undefined>(undefined, { alias: 'viewBox' });

  /**
   * Sets the SVG `xmlns` attribute.
   */
  readonly xmlns = input('http://www.w3.org/2000/svg');

  /**
   * Sets the CSS `pointer-events` property of the icon.
   */
  readonly pointerEvents = input<IPointerEvents>('none', { alias: 'pointer-events' });

  /**
   * Sets the ARIA role of the icon.
   */
  readonly role = input('img');

  readonly hostClasses = computed<NgCssClass>(() => {
    const computedSize = this.computedSize();
    const classes = {
      icon: true,
      [`icon-${computedSize}`]: !!computedSize
    };
    return this.customClasses() ?? classes;
  });

  readonly viewBox = computed(() => {
    return this.viewBoxInput() ?? this.scale();
  });

  readonly innerHtml = computed(() => {
    const codeVal = this.code();
    const code = Array.isArray(codeVal) ? (codeVal?.[1] ?? codeVal?.[0] ?? '') : codeVal || '';
    // todo proper sanitize
    // const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, code);
    return this.#sanitizer.bypassSecurityTrustHtml(this.#titleCode() + code || '');
  });

  readonly #titleCode = computed(() => {
    const title = this.title();
    return title ? `<title>${escapeHtml(title)}</title>` : '';
  });

  readonly code = computed(() => {
    const content = this.content();
    if (content) {
      return content;
    }
    const name = this.name();
    return name ? this.#iconSet.getIcon(name) : '';
  });

  readonly scale = computed(() => {
    return Array.isArray(this.code()) && (this.code()?.length ?? 0) > 1 ? `0 0 ${this.code()?.[0]}` : '0 0 64 64';
  });

  readonly computedSize = computed(() => {
    const addCustom = !this.size() && (this.width() || this.height());
    return this.size() === 'custom' || addCustom ? 'custom-size' : this.size();
  });
}
