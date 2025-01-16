import { computed, Injectable, signal } from '@angular/core';

@Injectable()
export class ProgressService {
  readonly stacked = signal(false);
  readonly value = signal<number | undefined>(undefined);
  readonly precision = signal(0);
  readonly min = signal(0);
  readonly max = signal(100);

  readonly percent = computed(() => {
    return +((((this.value() ?? 0) - this.min()) / (this.max() - this.min())) * 100).toFixed(this.precision());
  });
}
