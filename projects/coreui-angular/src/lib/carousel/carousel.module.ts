import { ModuleWithProviders, NgModule } from '@angular/core';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCaptionComponent } from './carousel-caption/carousel-caption.component';
import { CarouselControlComponent } from './carousel-control/carousel-control.component';
import { CarouselIndicatorsComponent } from './carousel-indicators/carousel-indicators.component';
import { CarouselInnerComponent } from './carousel-inner/carousel-inner.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselService } from './carousel.service';
import { CarouselState } from './carousel-state';
import { CarouselConfig } from './carousel.config';

@NgModule({
  imports: [
    CarouselComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent
  ],
  providers: [CarouselService, CarouselState, CarouselConfig],
  exports: [
    CarouselComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent
  ]
})
export class CarouselModule {
  static forRoot(): ModuleWithProviders<CarouselModule> {
    return { ngModule: CarouselModule, providers: [] };
  }
}
