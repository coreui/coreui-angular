import { ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ListenersService } from '../services/listeners.service';
import { PopoverDirective } from './popover.directive';

describe('PopoverDirective', () => {
  let document: Document;
  let renderer: Renderer2;
  let hostElement: ElementRef;
  let componentFactoryResolver: ComponentFactoryResolver;
  let viewContainerRef: ViewContainerRef;

  it('should create an instance', () => {
    const listenersService = new ListenersService(renderer);
    const directive = new PopoverDirective(document, renderer, hostElement, componentFactoryResolver, viewContainerRef, listenersService);
    expect(directive).toBeTruthy();
  });
});
