import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { HtmlAttributesDirective } from '../../shared';
import { By } from '@angular/platform-browser';

describe('SidebarNavLinkComponent', () => {
  let component: SidebarNavLinkComponent;
  let fixture: ComponentFixture<SidebarNavLinkComponent>;
  let router: Router;
  let item: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HtmlAttributesDirective, SidebarNavLinkComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavLinkComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;

    item = {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cil-speedometer',
      badge: {
        color: 'info',
        text: 'NEW'
      }
    };
    fixture.componentRef.setInput('item', item);

    // router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have item with name "Dashboard"', () => {
    const link = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(link.textContent).toContain('Dashboard');
  });

  it('should have correct URL', () => {
    const link = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(link.getAttribute('href')).toBe('/dashboard');
  });

  it('should have correct icon class', () => {
    const icon = fixture.debugElement.query(By.css('.cil-speedometer')).nativeElement;
    expect(icon).toBeTruthy();
  });

  it('should have badge with text "NEW"', () => {
    const badge = fixture.debugElement.query(By.css('.badge')).nativeElement;
    expect(badge.textContent).toContain('NEW');
    expect(badge.classList).toContain('bg-info');
  });
});
