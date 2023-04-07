import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { IconSetService } from './icon-set.service';

@NgModule({
  providers: [IconSetService]
})
export class IconSetModule {
  constructor(@Optional() @SkipSelf() parentModule?: IconSetModule) {
    if (parentModule) {
      throw new Error(
        'CoreUI IconSetModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<IconSetModule> {
    return {
      ngModule: IconSetModule,
      providers: [
        { provide: IconSetService }
      ]
    };
  }
}
