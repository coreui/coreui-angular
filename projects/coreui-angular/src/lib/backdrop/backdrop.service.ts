import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackdropService {

  private backdropClick = new Subject<boolean>();
  backdropClick$ = this.backdropClick.asObservable();

  private renderer: Renderer2;
  private unListen!: () => void;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setBackdrop(): any {
    const backdrop = this.renderer.createElement('div');
    this.renderer.addClass(backdrop, 'modal-backdrop');
    this.renderer.addClass(backdrop, 'fade');
    this.renderer.appendChild(this.document.body, backdrop);
    this.unListen = this.renderer.listen(backdrop, 'click', (e): void => {
      this.onClickHandler();
    });
    setTimeout(() => {
      this.renderer.addClass(backdrop, 'show');
    });
    return backdrop;
  }

  clearBackdrop(backdrop: any): any {
    if (backdrop) {
      this.unListen();
      this.renderer.removeClass(backdrop, 'show');
      setTimeout(() => {
        this.renderer.removeChild(this.document.body, backdrop);
        backdrop = undefined;
      }, 300);
    }
    return backdrop;
  }

  onClickHandler(): void {
    this.backdropClick.next(true);
  }
}
