import { computed, Directive, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { IconSetService } from '../icon-set';
import { IconSize, IIcon, IPointerEvents, NgCssClass } from './icon.interface';
import { transformName } from './icon.utils';

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

  readonly content = input<string | string[] | any[] | undefined>(undefined, { alias: 'cIcon' });

  readonly customClasses = input<NgCssClass>();
  readonly size = input<IconSize>('');
  readonly title = input<string>();
  readonly height = input<string>();
  readonly width = input<string>();
  readonly name = input('', { transform: transformName });
  readonly viewBoxInput = input<string | undefined>(undefined, { alias: 'viewBox' });
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly pointerEvents = input<IPointerEvents>('none', { alias: 'pointer-events' });
  readonly role = input('img');

  readonly hostClasses = computed(() => {
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
    return this.title() ? `<title>${this.title()}</title>` : '';
  });

  readonly code = computed(() => {
    const content = this.content();
    if (content) {
      return content;
    }
    const name = this.name();
    if (this.#iconSet && name) {
      return this.#iconSet.getIcon(name);
    }
    if (name && !this.#iconSet?.icons[name]) {
      console.warn(
        `cIcon directive: The '${name}' icon not found. Add it to the IconSet service for use with the 'name' property. \n`,
        name
      );
    }
    return '';
  });

  readonly scale = computed(() => {
    return Array.isArray(this.code()) && (this.code()?.length ?? 0) > 1 ? `0 0 ${this.code()?.[0]}` : '0 0 64 64';
  });

  readonly computedSize = computed(() => {
    const addCustom = !this.size() && (this.width() || this.height());
    return this.size() === 'custom' || addCustom ? 'custom-size' : this.size();
  });
}
