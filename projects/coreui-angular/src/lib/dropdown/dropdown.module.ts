import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, DropdownToggleDirective } from './dropdown/dropdown.component';
import { DropdownDividerDirective } from './dropdown-divider/dropdown-divider.directive';
import { DropdownHeaderDirective } from './dropdown-header/dropdown-header.directive';
import { DropdownItemDirective } from './dropdown-item/dropdown-item.directive';
import { DropdownItemPlainDirective } from './dropdown-item/dropdown-item-plain.directive';
import { DropdownMenuDirective } from './dropdown-menu/dropdown-menu.directive';
import { DropdownService } from './dropdown.service';
import { DropdownCloseDirective } from './dropdown-close/dropdown-close.directive';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownDividerDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownItemPlainDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownCloseDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropdownComponent,
    DropdownDividerDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownItemPlainDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownCloseDirective
  ],
  providers: [
    DropdownService,
  ]
})
export class DropdownModule {
}
