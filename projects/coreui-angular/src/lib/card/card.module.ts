import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
import { CardHeaderComponent } from './card-header.component';
import { CardHeaderActionsComponent } from './card-header-actions.component';
import { CardGroupComponent } from './card-group.component';
import { CardImgDirective } from './card-img.directive';
import { CardLinkDirective } from './card-link.directive';
import { CardSubtitleDirective } from './card-subtitle.directive';
import { CardTextDirective } from './card-text.directive';
import { CardTitleDirective } from './card-title.directive';
import { CardImgOverlayComponent } from './card-img-overlay/card-img-overlay.component';

@NgModule({
  imports: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardGroupComponent,
    CardHeaderComponent,
    CardHeaderActionsComponent,
    CardImgDirective,
    CardImgOverlayComponent,
    CardLinkDirective,
    CardSubtitleDirective,
    CardTextDirective,
    CardTitleDirective
  ],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardGroupComponent,
    CardHeaderComponent,
    CardHeaderActionsComponent,
    CardImgDirective,
    CardImgOverlayComponent,
    CardLinkDirective,
    CardSubtitleDirective,
    CardTextDirective,
    CardTitleDirective
  ]
})
export class CardModule {}
