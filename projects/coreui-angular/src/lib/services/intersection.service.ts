import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IIntersectionObserverInit {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

@Injectable()
export class IntersectionService implements OnDestroy {

  constructor() { }

  private intersecting = new BehaviorSubject<boolean>(false);
  intersecting$ = this.intersecting.asObservable();

  private intersectionObserver!: IntersectionObserver;
  private hostElement!: { nativeElement: Element; };

  private defaultObserverOptions: IIntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  createIntersectionObserver(hostElement: { nativeElement: Element; }, observerOptions = this.defaultObserverOptions) {

    const options = { ...this.defaultObserverOptions, ...observerOptions };

    this.hostElement = hostElement;

    const handleIntersect = (entries: any[], observer: any) => {
      entries.forEach((entry: any) => {
        this.intersecting.next(entry.isIntersecting);
      });
    };

    this.intersectionObserver = new IntersectionObserver(handleIntersect, options);
    this.intersectionObserver.observe(hostElement.nativeElement);
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.unobserve(this.hostElement?.nativeElement);
  }
}
