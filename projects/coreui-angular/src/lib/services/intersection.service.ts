import { isPlatformServer } from '@angular/common';
import { ElementRef, inject, Injectable, OnDestroy, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IIntersectionObserverInit {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

@Injectable({
  providedIn: 'root'
})
export class IntersectionService implements OnDestroy {

  platformId = inject(PLATFORM_ID);

  readonly #intersecting: BehaviorSubject<any> = new BehaviorSubject({ isIntersecting: false });
  readonly intersecting$ = this.#intersecting.asObservable();

  private defaultObserverOptions: IIntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  hostElementRefs: Map<ElementRef, IntersectionObserver | null> = new Map();

  createIntersectionObserver(hostElement: ElementRef, observerOptions = this.defaultObserverOptions) {

    if (isPlatformServer(this.platformId)) {
      this.#intersecting.next({ isIntersecting: true, hostElement });
      return;
    }

    const options: IIntersectionObserverInit = { ...this.defaultObserverOptions, ...observerOptions };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: any) => {
        this.#intersecting.next({ isIntersecting: entry.isIntersecting, hostElement });
      });
    };

    this.hostElementRefs.set(hostElement, new IntersectionObserver(handleIntersect, options));
    this.hostElementRefs.get(hostElement)?.observe(hostElement.nativeElement);
  }

  unobserve(elementRef: ElementRef) {
    this.hostElementRefs.get(elementRef)?.unobserve(elementRef.nativeElement);
    this.hostElementRefs.set(elementRef, null);
    this.hostElementRefs.delete(elementRef);
  }

  ngOnDestroy(): void {
    this.hostElementRefs.forEach((observer, elementRef) => {
      observer?.unobserve(elementRef.nativeElement);
    });
  }
}
