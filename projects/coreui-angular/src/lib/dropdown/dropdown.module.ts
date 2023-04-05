import { NgModule } from '@angular/core';
import { DropdownComponent, DropdownToggleDirective } from './dropdown/dropdown.component';
import { DropdownDividerDirective } from './dropdown-divider/dropdown-divider.directive';
import { DropdownHeaderDirective } from './dropdown-header/dropdown-header.directive';
import { DropdownItemDirective } from './dropdown-item/dropdown-item.directive';
import { DropdownItemPlainDirective } from './dropdown-item/dropdown-item-plain.directive';
import { DropdownMenuDirective } from './dropdown-menu/dropdown-menu.directive';
import { DropdownService } from './dropdown.service';
import { DropdownCloseDirective } from './dropdown-close/dropdown-close.directive';

@NgModule({
  imports: [
    DropdownComponent,
    DropdownCloseDirective,
    DropdownDividerDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownItemPlainDirective,
    DropdownMenuDirective,
    DropdownToggleDirective
  ],
  exports: [
    DropdownComponent,
    DropdownCloseDirective,
    DropdownDividerDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownItemPlainDirective,
    DropdownMenuDirective,
    DropdownToggleDirective
  ],
  providers: [DropdownService]
})
export class DropdownModule {}
