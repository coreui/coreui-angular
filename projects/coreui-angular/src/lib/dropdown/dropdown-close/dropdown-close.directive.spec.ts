import { DropdownCloseDirective } from './dropdown-close.directive';
import { TestBed } from '@angular/core/testing';
import { DropdownService } from '../dropdown.service';

describe('DropdownCloseDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [DropdownService]
    });
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownCloseDirective();
      expect(directive).toBeTruthy();
    });
  });
});
