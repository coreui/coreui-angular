import { Injectable, signal } from '@angular/core';

@Injectable()
export class TabsService {
  readonly activeItem = signal<any>(undefined);
  readonly activeItemKey = signal<string | number | undefined>(undefined);
  readonly id = signal<string | number | undefined>(undefined);
}
