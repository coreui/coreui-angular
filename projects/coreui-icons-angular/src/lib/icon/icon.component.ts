import { NgClass } from '@angular/common';
import { Component, computed, effect, ElementRef, inject, input, Renderer2, viewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HtmlAttributesDirective } from '../shared/html-attr.directive';
import { IconSetService } from '../icon-set';
import { IconSize, IIcon, NgCssClass } from './icon.interface';
import { transformName } from './icon.utils';

@Component({
  exportAs: 'cIconComponent',
  imports: [NgClass, HtmlAttributesDirective],
  selector: 'c-icon',
  styleUrls: ['./icon.component.scss'],
  templateUrl: './icon.component.svg',
  host: { ngSkipHydration: 'true', style: 'display: none' }
})
export class IconComponent implements IIcon {
  readonly #renderer = inject(Renderer2);
  readonly #elementRef = inject(ElementRef);
  readonly #sanitizer = inject(DomSanitizer);
  readonly #iconSet = inject(IconSetService);

  readonly content = input<string | string[] | any[]>();

  readonly attributes = input<Record<string, any>>({ role: 'img' });
  readonly customClasses = input<NgCssClass>();
  readonly size = input<IconSize>('');
  readonly title = input<string>();
  readonly use = input<string>('');
  readonly height = input<string>();
  readonly width = input<string>();
  readonly name = input('', { transform: transformName });
  readonly viewBoxInput = input<string | undefined>(undefined, { alias: 'viewBox' });

  readonly svgElementRef = viewChild<ElementRef>('svgElement');

  readonly #svgElementEffect = effect(() => {
    const svgElementRef = this.svgElementRef();
    const hostElement: Element = this.#elementRef.nativeElement;
    if (svgElementRef && hostElement) {
      const svgElement = svgElementRef.nativeElement;
      hostElement.classList?.forEach((item: string) => {
        this.#renderer.addClass(svgElement, item);
      });
      const parentElement = this.#renderer.parentNode(hostElement);
      this.#renderer.insertBefore(parentElement, svgElement, hostElement);
      this.#renderer.removeChild(parentElement, hostElement);
    }
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
        `c-icon component: The '${name}' icon not found. Add it to the IconSet service for use with the 'name' property. \n`,
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

  readonly computedClasses = computed(() => {
    const classes = {
      icon: true,
      [`icon-${this.computedSize()}`]: !!this.computedSize()
    };
    return this.customClasses() ?? classes;
  });
}
