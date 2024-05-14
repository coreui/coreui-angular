import { TestBed } from '@angular/core/testing';
import { TemplateIdDirective } from './template-id.directive';
import { TemplateRef } from '@angular/core';

describe('TemplateIdDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateRef],
    });
  });
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TemplateIdDirective();
      expect(directive).toBeTruthy();
    });
  });
});
