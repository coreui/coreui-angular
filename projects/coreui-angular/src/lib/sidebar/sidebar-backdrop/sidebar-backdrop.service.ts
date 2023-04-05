import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarService } from '../sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarBackdropService {

  private backdrop!: HTMLElement;
  renderer!: Renderer2;
  private clickListener = (): void => {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    // private rendererFactory: RendererFactory2,
    private sidebarService: SidebarService
  ) {
    // this.renderer = rendererFactory.createRenderer(null, null);
  }

  setBackdrop(sidebar: SidebarComponent): void {
    const backdrop = this.document.getElementsByClassName('sidebar-backdrop');
    // console.log(`sidebar-${this.id}`, ' setBackdrop', backdrop);
    if (backdrop.length === 0) {
      this.backdrop = this.renderer.createElement('div');
      this.renderer.addClass(this.backdrop, 'sidebar-backdrop');
      this.renderer.appendChild(this.document.body, this.backdrop);
      this.clickListener = this.renderer.listen(this.backdrop, 'click', (e) => {
        // console.log(`sidebar-${this.id}`, ' backdrop click', e);
        this.sidebarService.toggle({ toggle: 'visible', sidebar });
      });
    }
    // console.log(this.backdrop, sidebar.sidebarState.mobile, sidebar.sidebarState.show);
    if (this.backdrop && sidebar.sidebarState.mobile && sidebar.sidebarState.visible) {
      this.renderer.addClass(this.backdrop, 'fade');
      this.renderer.addClass(this.backdrop, 'show');
      // this.renderer.removeClass(this.backdrop, 'd-none');
    } else {
      this.renderer.removeClass(this.backdrop, 'show');
      this.renderer.removeClass(this.backdrop, 'fade');
      // this.renderer.addClass(this.backdrop, 'd-none');
    }
  }

  clearBackdrop(): void {
    if (this.backdrop) {
      // clear backdrop click Listener
      this.clickListener();
      // this.renderer.listen(this.backdrop, 'click', (e): void => {} );
      this.renderer.removeChild(this.document.body, this.backdrop);
      // @ts-ignore
      this.backdrop = undefined;
    }
  }

}
