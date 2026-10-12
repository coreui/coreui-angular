import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ToasterHostDirective } from './toaster-host.directive';

describe('ToasterHostDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(ToasterHostDirective, { tagName: 'div' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.directiveInstance.viewContainerRef).toBeInstanceOf(ViewContainerRef);
  });
});
