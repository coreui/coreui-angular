import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, DropdownToggleDirective } from './dropdown/dropdown.component';
import { DropdownDividerDirective } from './dropdown-divider/dropdown-divider.directive';
import { DropdownHeaderDirective } from './dropdown-header/dropdown-header.directive';
import { DropdownItemDirective } from './dropdown-item/dropdown-item.directive';
import { DropdownItemPlainDirective } from './dropdown-item/dropdown-item-plain.directive';
import { DropdownMenuDirective } from './dropdown-menu/dropdown-menu.directive';
import { DropdownService } from './dropdown.service';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownDividerDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownItemPlainDirective,
    DropdownToggleDirective,
    DropdownMenuDirective
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
    DropdownMenuDirective
  ],
  providers: [
    DropdownService,
  ]
})
export class DropdownModule {
}
