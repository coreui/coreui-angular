import { NgModule } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ToastHeaderComponent } from './toast-header/toast-header.component';
import { ToastBodyComponent } from './toast-body/toast-body.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterService } from './toaster/toaster.service';
import { ToasterHostDirective } from './toaster/toaster-host.directive';
import { ToastCloseDirective } from './toast-close.directive';

@NgModule({
  imports: [
    ToastBodyComponent,
    ToastComponent,
    ToastCloseDirective,
    ToastHeaderComponent,
    ToasterComponent,
    ToasterHostDirective
  ],
  providers: [ToasterService],
  exports: [
    ToastBodyComponent,
    ToastComponent,
    ToastCloseDirective,
    ToastHeaderComponent,
    ToasterComponent,
    ToasterHostDirective
  ]
})
export class ToastModule {
}
