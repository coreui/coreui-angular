import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class IntersectionService implements OnDestroy {

  constructor() { }

  private intersecting = new BehaviorSubject<boolean>(false);
  intersecting$ = this.intersecting.asObservable();

  private intersectionObserver!: IntersectionObserver;
  private hostElement!: { nativeElement: Element; };

  createIntersectionObserver(hostElement: { nativeElement: Element; }) {

    this.hostElement = hostElement;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

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
