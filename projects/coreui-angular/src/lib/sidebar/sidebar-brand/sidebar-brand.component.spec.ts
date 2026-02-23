import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { SidebarBrandComponent } from './sidebar-brand.component';
import { HtmlAttributesDirective } from '../../shared';

describe('SidebarBrandComponent', () => {
  let component: SidebarBrandComponent;
  let fixture: ComponentFixture<SidebarBrandComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlAttributesDirective, SidebarBrandComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarBrandComponent);
    await fixture.whenStable();

    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('sidebar-brand')).toBe(true);
  });
});
