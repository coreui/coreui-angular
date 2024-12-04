import { ModuleWithProviders, NgModule, inject } from '@angular/core';

import { IconSetService } from './icon-set.service';

@NgModule({
  providers: [IconSetService]
})
export class IconSetModule {
  constructor() {
    const parentModule = inject(IconSetModule, { optional: true, skipSelf: true });

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
