import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { Triggers } from '../coreui.types';

export interface IListenersConfig {
  hostElement: ElementRef,
  trigger?: Triggers | Triggers[],
  callbackOn?: () => void,
  callbackOff?: () => void,
  callbackToggle?: () => void,
}

@Injectable()
export class ListenersService {

  private listeners: Map<string, () => void> = new Map();

  constructor(
    private renderer: Renderer2
  ) {}

  setListeners({hostElement, trigger, callbackOn, callbackOff, callbackToggle}: IListenersConfig): void {
    const host = hostElement.nativeElement;
    const triggers = Array.isArray(trigger)
      ? trigger
      : trigger?.split(' ') ?? [];

    if (triggers?.includes('click')) {
      typeof callbackToggle === 'function' && this.listeners.set(
        'click',
        this.renderer.listen(host, 'click', callbackToggle)
      );
    }
    if (triggers?.includes('focus')) {
      typeof callbackOn === 'function' && this.listeners.set(
        'focus',
        this.renderer.listen(host, 'focus', callbackOn)
      );
    }
    if (triggers?.includes('click') || triggers?.includes('focus')) {
      typeof callbackOff === 'function' && this.listeners.set(
        'blur',
        this.renderer.listen(host, 'blur', callbackOff)
      );
    }
    if (triggers?.includes('hover')) {
      typeof callbackOn === 'function' && this.listeners.set(
        'mouseenter',
        this.renderer.listen(host, 'mouseenter', callbackOn),
      );
      typeof callbackOff === 'function' && this.listeners.set(
        'mouseleave',
        this.renderer.listen(host, 'mouseleave', callbackOff)
      );
    }
  }

  clearListeners(): void {
    this.listeners.forEach((unListen, key) => {
       unListen();
    });
    this.listeners.forEach((unListen, key) => {
      // @ts-ignore
      this.listeners.set(key, null);
    });
    this.listeners.clear();
  }
}
