import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { NavGroupItemsComponent } from './nav-group-items.component';

describe('NavGroupItemsComponent', () => {
  let component: NavGroupItemsComponent;
  let fixture: ComponentFixture<NavGroupItemsComponent>;
  let componentRef: ComponentRef<NavGroupItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavGroupItemsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavGroupItemsComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('nav-group-items')).toBe(true);
  });

  it('should have css classes for compact', () => {
    expect(fixture.nativeElement.classList.contains('compact')).toBe(false);
    componentRef.setInput('compact', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('compact')).toBe(true);
  });
});
