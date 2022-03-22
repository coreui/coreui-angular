import { DropdownService } from '../dropdown.service';
import { DropdownItemDirective } from './dropdown-item.directive';

describe('DropdownItemDirective', () => {

  it('should create an instance', () => {
    const dropdownService = new DropdownService();
    const directive = new DropdownItemDirective(dropdownService);
    expect(directive).toBeTruthy();
  });
});
