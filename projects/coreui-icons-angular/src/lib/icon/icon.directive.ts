import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconSetService } from '../icon-set';

import { IconSize, IIcon } from './icon.interface';

@Directive({
  selector: 'svg[cIcon]',
  exportAs: 'cIcon'
})
export class IconDirective implements IIcon {

  @Input('cIcon') content?: string | string[] | any[];
  @Input() size: IconSize = '';
  @Input() title?: string;
  @Input() customClasses?: string | string[] | Set<string> | { [klass: string]: any };
  @Input() width?: string;
  @Input() height?: string;

  @Input()
  set name(name: string) {
    this._name = name?.includes('-') ? this.toCamelCase(name) : name;
  }
  get name(): string {
    return this._name;
  }
  private _name!: string;

  @HostBinding('attr.viewBox')
  @Input()
  set viewBox(viewBox: string) {
    this._viewBox = viewBox;
  }
  get viewBox(): string {
    return this._viewBox ?? this.scale;
  }
  private _viewBox!: string;

  @HostBinding('attr.xmlns')
  @Input() xmlns = 'http://www.w3.org/2000/svg';

  @HostBinding('attr.pointer-events')
  @Input('pointer-events') pointerEvents = 'none';

  @HostBinding('attr.role')
  @Input() role = 'img';

  @HostBinding('class')
  get hostClasses() {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return this.customClasses ?? classes;
  }

  @HostBinding('innerHtml')
  get innerHtml() {
    const code = Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code ?? '';
    // todo proper sanitize
    // const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, code);
    return this.sanitizer.bypassSecurityTrustHtml((this.titleCode + code) ?? '');
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    private iconSet: IconSetService
  ) { }

  get titleCode(): string {
    return this.title ? `<title>${this.title}</title>` : '';
  }

  get code(): string | string[] | undefined {
    if (this.content) {
      return this.content;
    }
    if (this.iconSet && this.name) {
      return this.iconSet.getIcon(this.name);
    }
    if (this.name && !this.iconSet?.icons[this.name])
      console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. ` +
        `To use icon by 'name' prop you need to add it to IconSet service. \n`,
        this.name
      );
    return undefined;
  }

  get scale(): string {
    return Array.isArray(this.code) && this.code.length > 1 ? `0 0 ${this.code[0]}` : '0 0 64 64';
  }

  get computedSize(): Exclude<IconSize, 'custom'> | undefined {
    const addCustom = !this.size && (this.width || this.height);
    return this.size === 'custom' || addCustom ? 'custom-size' : this.size;
  }

  get computedClasses(): any {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return !!this.customClasses ? this.customClasses : classes;
  }

  toCamelCase(str: string): any {
    return str.replace(/([-_][a-z0-9])/ig, ($1: string) => {
      return $1.toUpperCase().replace('-', '');
    });
  }
}
