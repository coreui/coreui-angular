import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TabsComponent } from './tabs.component';

@Component({
  template: '<c-tabs />',
  imports: [TabsComponent]
})
class TestComponent {}

describe('TabsComponent', () => {
  let component: TabsComponent;

  beforeEach(async () => {
    const fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();

    component = fixture.debugElement.query(By.directive(TabsComponent)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
