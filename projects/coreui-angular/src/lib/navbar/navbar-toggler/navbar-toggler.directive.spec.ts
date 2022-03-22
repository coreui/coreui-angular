import { NavbarTogglerDirective } from './navbar-toggler.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('NavbarTogglerDirective', () => {
  let renderer: Renderer2;
  let hostElement: ElementRef;

  it('should create an instance', () => {
    const directive = new NavbarTogglerDirective(renderer, hostElement);
    expect(directive).toBeTruthy();
  });
});
