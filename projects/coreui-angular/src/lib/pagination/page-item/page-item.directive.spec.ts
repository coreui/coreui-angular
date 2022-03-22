import { PageItemDirective } from './page-item.directive';
import { TestBed } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';

describe('PageItemDirective', () => {
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Renderer2],
      providers: [Renderer2]
    });
  });
  it('should create an instance', () => {
    const directive = new PageItemDirective(renderer);
    expect(directive).toBeTruthy();
  });
});
