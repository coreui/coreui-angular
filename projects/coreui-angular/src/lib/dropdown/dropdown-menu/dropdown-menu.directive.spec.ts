import { ElementRef } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownMenuDirective } from './dropdown-menu.directive';

describe('DropdownMenuDirective', () => {
  let elementRef: ElementRef;
  it('should create an instance', () => {
    const dropdownService = new DropdownService();
    const directive = new DropdownMenuDirective(elementRef, dropdownService);
    expect(directive).toBeTruthy();
  });
});
