import { ElementRef } from '@angular/core';
import { FormControlDirective } from './form-control.directive';

describe('FormControlDirective', () => {
  let hostElement: ElementRef;
  it('should create an instance', () => {
    const directive = new FormControlDirective(hostElement);
    expect(directive).toBeTruthy();
  });
});
