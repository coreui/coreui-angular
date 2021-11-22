import { BaseChartDirective, ThemeService } from 'ng2-charts';
import { Directive, ElementRef, NgZone } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'canvas[cNoZoneBaseChart]',
  exportAs: 'base-chart'
})
export class NoZoneBaseChartDirective extends BaseChartDirective {

  public constructor(
    element: ElementRef,
    themeService: ThemeService,
    private zone: NgZone
  ) {
    super(element, themeService);

    // patch private refresh
    const refresh = (this as any).refresh;
    (this as any).refresh = () => {
      this.zone.runOutsideAngular(refresh.bind(this));
    };
  }

}
