import { ElementRef, Renderer2 } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownItemDirective } from './dropdown-item.directive';

describe('DropdownItemDirective', () => {
  let renderer: Renderer2;
  let hostElement: ElementRef;

  it('should create an instance', () => {
    const dropdownService = new DropdownService();
    const directive = new DropdownItemDirective(renderer, hostElement, dropdownService);
    expect(directive).toBeTruthy();
  });
});
