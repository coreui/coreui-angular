import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { TabsListComponent } from './tabs-list.component';
import { TabsService } from '../tabs.service';

describe('TabsListComponent', () => {
  let component: TabsListComponent;
  let fixture: ComponentFixture<TabsListComponent>;
  let componentRef: ComponentRef<TabsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsListComponent],
      providers: [TabsService]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsListComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes for variant', () => {
    expect(fixture.nativeElement.classList.contains('nav')).toBe(true);

    componentRef.setInput('variant', 'pills');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-pills')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-enclosed')).toBe(false);

    componentRef.setInput('variant', 'enclosed');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-enclosed')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-enclosed-pills')).toBe(false);

    componentRef.setInput('variant', 'enclosed-pills');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('nav-enclosed')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-enclosed-pills')).toBe(true);
  });
});
