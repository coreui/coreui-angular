import { PageItemDirective } from './page-item.directive';
import { TestBed } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';

describe('PageItemDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2]
    });
  });
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new PageItemDirective();
      expect(directive).toBeTruthy();
    });
  });
});
