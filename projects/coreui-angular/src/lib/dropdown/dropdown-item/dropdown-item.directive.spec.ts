import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownService } from '../dropdown.service';

class MockElementRef extends ElementRef {}

describe('DropdownItemDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }, DropdownService]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownItemDirective();
      expect(directive).toBeTruthy();
    });
  });
});
