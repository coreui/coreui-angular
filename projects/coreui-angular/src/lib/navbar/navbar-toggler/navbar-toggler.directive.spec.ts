import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavbarTogglerDirective } from './navbar-toggler.directive';

describe('NavbarTogglerDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2, { provide: ElementRef, useValue: { nativeElement: document.createElement('button') } }]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new NavbarTogglerDirective();
      expect(directive).toBeTruthy();
    });
  });
});
