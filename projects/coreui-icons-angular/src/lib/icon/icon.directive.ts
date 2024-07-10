import { afterNextRender, computed, Directive, ElementRef, HostBinding, inject, Input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { IconSetService } from '../icon-set';
import { IconSize, IIcon } from './icon.interface';
import { transformName } from './icon.utils';

@Directive({
  exportAs: 'cIcon',
  selector: 'svg[cIcon]',
  standalone: true
})
export class IconDirective implements IIcon {
  readonly #elementRef = inject(ElementRef);
  readonly #sanitizer = inject(DomSanitizer);
  readonly #iconSet = inject(IconSetService);

  constructor() {
    afterNextRender({
      write: () => {
        this.#elementRef.nativeElement.innerHTML = this.innerHtml();
      }
    });
  }

  @Input('cIcon')
  set content(value: string | string[] | any[]) {
    this.#content.set(value);
  }

  readonly #content = signal<string | string[] | any[]>('');

  @Input() customClasses?: string | string[] | Set<string> | { [klass: string]: any };
  @Input() size: IconSize = '';
  @Input() title?: string;
  @Input() height?: string;
  @Input() width?: string;

  @Input({ transform: transformName })
  set name(value: string) {
    this.#name.set(value);
  }

  get name() {
    return this.#name();
  }

  readonly #name = signal('');

  @HostBinding('attr.viewBox')
  @Input()
  set viewBox(viewBox: string) {
    this._viewBox = viewBox;
  }

  get viewBox(): string {
    return this._viewBox ?? this.scale();
  }

  private _viewBox!: string;

  @HostBinding('attr.aria-hidden') ariaHidden = true;

  @HostBinding('attr.xmlns')
  @Input()
  xmlns = 'http://www.w3.org/2000/svg';

  @HostBinding('attr.pointer-events')
  @Input('pointer-events')
  pointerEvents = 'none';

  @HostBinding('attr.role')
  @Input()
  role = 'img';

  @HostBinding('class')
  get hostClasses() {
    return this.computedClasses;
  }

  @HostBinding('innerHtml')
  get bindInnerHtml() {
    return this.innerHtml();
  }

  readonly innerHtml = computed(() => {
    const code = Array.isArray(this.code()) ? this.code()[1] ?? this.code()[0] ?? '' : this.code() || '';
    // todo proper sanitize
    // const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, code);
    return this.#sanitizer.bypassSecurityTrustHtml(this.titleCode + code || '');
  });

  get titleCode(): string {
    return this.title ? `<title>${this.title}</title>` : '';
  }

  readonly code = computed(() => {
    if (this.#content()) {
      return this.#content();
    }
    if (this.#iconSet && this.#name()) {
      return this.#iconSet.getIcon(this.#name());
    }
    if (this.#name() && !this.#iconSet?.icons[this.#name()]) {
      console.warn(
        `c-icon component: icon name '${this.#name()}' does not exist for IconSet service. ` +
          `To use icon by 'name' prop you need to add it to IconSet service. \n`,
        this.#name()
      );
    }
    return '';
  });

  readonly scale = computed(() => {
    return Array.isArray(this.code()) && this.code().length > 1 ? `0 0 ${this.code()[0]}` : '0 0 64 64';
  });

  get computedSize(): Exclude<IconSize, 'custom'> | undefined {
    const addCustom = !this.size && (this.width || this.height);
    return this.size === 'custom' || addCustom ? 'custom-size' : this.size;
  }

  get computedClasses() {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return this.customClasses ?? classes;
  }
}
