import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  Input,
  Renderer2,
  signal,
  ViewChild
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HtmlAttributesDirective } from '../shared/html-attr.directive';
import { IconSetService } from '../icon-set';
import { IconSize, IIcon } from './icon.interface';
import { transformName } from './icon.utils';

@Component({
  exportAs: 'cIconComponent',
  imports: [NgClass, HtmlAttributesDirective],
  selector: 'c-icon',
  standalone: true,
  styleUrls: ['./icon.component.scss'],
  templateUrl: './icon.component.svg',
  host: { ngSkipHydration: 'true' }
})
export class IconComponent implements IIcon, AfterViewInit {
  readonly #renderer = inject(Renderer2);
  readonly #elementRef = inject(ElementRef);
  readonly #sanitizer = inject(DomSanitizer);
  readonly #iconSet = inject(IconSetService);

  constructor() {
    this.#renderer.setStyle(this.#elementRef.nativeElement, 'display', 'none');
  }

  @Input()
  set content(value: string | string[] | any[]) {
    this.#content.set(value);
  }

  readonly #content = signal<string | string[] | any[]>('');

  @Input() attributes: any = { role: 'img' };
  @Input() customClasses?: string | string[] | Set<string> | { [klass: string]: any };
  @Input() size: IconSize = '';
  @Input() title?: string;
  @Input() use = '';
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

  @Input()
  set viewBox(viewBox: string) {
    this._viewBox = viewBox;
  }

  get viewBox(): string {
    return this._viewBox ?? this.scale();
  }

  private _viewBox!: string;

  @ViewChild('svgElement', { read: ElementRef }) svgElementRef!: ElementRef;

  ngAfterViewInit(): void {
    this.#elementRef.nativeElement.classList.forEach((item: string) => {
      this.#renderer.addClass(this.svgElementRef.nativeElement, item);
    });
    const parentElement = this.#renderer.parentNode(this.#elementRef.nativeElement);
    const svgElement = this.svgElementRef.nativeElement;
    this.#renderer.insertBefore(parentElement, svgElement, this.#elementRef.nativeElement);
    this.#renderer.removeChild(parentElement, this.#elementRef.nativeElement);
  }

  readonly innerHtml = computed(() => {
    const code = Array.isArray(this.code()) ? (this.code()[1] ?? this.code()[0] ?? '') : this.code() || '';
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
