import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DropdownService } from '../dropdown.service';
import { DropdownItemDirective } from './dropdown-item.directive';

class MockElementRef extends ElementRef {}

describe('DropdownItemDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const dropdownService = new DropdownService();
      const directive = new DropdownItemDirective(dropdownService);
      expect(directive).toBeTruthy();
    });
  });
});
