import { DropdownService } from '../dropdown.service';
import { DropdownCloseDirective } from './dropdown-close.directive';

describe('DropdownCloseDirective', () => {
  it('should create an instance', () => {
    const dropdownService = new DropdownService();
    const directive = new DropdownCloseDirective(dropdownService);
    expect(directive).toBeTruthy();
  });
});
