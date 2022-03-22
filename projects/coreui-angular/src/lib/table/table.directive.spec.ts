import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';

import { TableDirective } from './table.directive';

describe('TableDirective', () => {
  let renderer: Renderer2;
  let hostElement: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Renderer2],
      providers: [Renderer2]
    });
  });

  it('should create an instance', () => {
    const directive = new TableDirective(renderer, hostElement);
    expect(directive).toBeTruthy();
  });
});
