import { Component } from '@angular/core';
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('sidebar-brand')).toBe(true);
  });
});

@Component({
  template: `
    <c-sidebar-brand [brandFull]="full" [brandNarrow]="narrow" routerLink="/home" />
    <c-sidebar-brand><span id="projected">Brand</span></c-sidebar-brand>
  `,
  imports: [SidebarBrandComponent]
})
class SidebarBrandHostComponent {
  readonly full = { src: 'full.svg', alt: 'CoreUI', height: 32 };
  readonly narrow = { src: 'narrow.svg', alt: 'CoreUI', height: 32 };
}

describe('SidebarBrandComponent content', () => {
  it('should link the full and narrow brand images or render projected content', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(SidebarBrandHostComponent);
    await fixture.whenStable();
    const [images, projected] = [...fixture.nativeElement.querySelectorAll('c-sidebar-brand')] as HTMLElement[];

    expect(images.querySelector('a')?.getAttribute('href')).toBe('/home');
    const [full, narrow] = [...images.querySelectorAll('img')];
    expect(full.getAttribute('src')).toBe('full.svg');
    expect(full.getAttribute('height')).toBe('32');
    expect(full.classList.contains('sidebar-brand-full')).toBe(true);
    expect(narrow.getAttribute('src')).toBe('narrow.svg');
    expect(narrow.classList.contains('sidebar-brand-narrow')).toBe(true);

    expect(projected.querySelector('#projected')).not.toBeNull();
    expect(projected.querySelector('a')).toBeNull();
  });
});
