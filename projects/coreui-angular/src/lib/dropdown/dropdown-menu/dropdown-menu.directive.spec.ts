import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DropdownService } from '../dropdown.service';
import { DropdownMenuDirective } from './dropdown-menu.directive';

class MockElementRef extends ElementRef {}

describe('DropdownMenuDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2, DropdownService]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownMenuDirective();
      expect(directive).toBeTruthy();
    });

  });
});
