import { Component, computed, contentChildren, DestroyRef, inject, OnInit, signal, TemplateRef } from '@angular/core';
import { CarouselService } from '../carousel.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgTemplateOutlet } from '@angular/common';
import { TemplateIdDirective } from '../../shared';

@Component({
  selector: 'c-carousel-indicators',
  exportAs: 'cCarouselIndicators',
  imports: [NgTemplateOutlet],
  templateUrl: './carousel-indicators.component.html',
  host: { class: 'carousel-indicators' }
})
export class CarouselIndicatorsComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #carouselService = inject(CarouselService);

  items: (number | undefined)[] = [];
  readonly active = signal(0);

  readonly contentTemplates = contentChildren(TemplateIdDirective, { descendants: true });

  readonly templates = computed(() => {
    return this.contentTemplates().reduce(
      (acc, child) => {
        acc[child.id] = child.templateRef;
        return acc;
      },
      {} as Record<string, TemplateRef<any>>
    );
  });

  ngOnInit(): void {
    this.#carouselService.carouselIndex$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((nextIndex) => {
      this.items = this.#carouselService?.state?.items?.map((item) => item.index) ?? [];
      if ('active' in nextIndex) {
        this.active.set(nextIndex.active ?? 0);
      }
    });
  }

  onClick(index: number): void {
    if (this.#carouselService.animating()) {
      return;
    }
    if (index !== this.active()) {
      const direction = index < this.active() ? 'prev' : 'next';
      this.#carouselService.state = { direction, activeItemIndex: index };
    }
  }
}
