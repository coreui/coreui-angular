import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { expect } from 'vitest';
import { CollapseDirective } from '../../collapse';
import { SidebarNavGroupComponent } from './sidebar-nav.component';
import { SidebarNavGroupService } from './sidebar-nav-group.service';

function endTransition(element: HTMLElement): void {
  const event = new Event('transitionend');
  Object.defineProperty(event, 'propertyName', { value: 'height' });
  element.dispatchEvent(event);
}

describe('SidebarNavGroupComponent', () => {
  let component: SidebarNavGroupComponent;
  let fixture: ComponentFixture<SidebarNavGroupComponent>;
  let router: Router;
  let item: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavGroupComponent],
      providers: [provideRouter([]), SidebarNavGroupService]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavGroupComponent);
    await fixture.whenStable();

    router = TestBed.inject(Router);
    component = fixture.componentInstance;

    item = {
      name: 'Tables',
      url: '/tables',
      icon: 'icon-list',
      children: [
        {
          name: 'DataTable',
          url: '/tables/datatable',
          icon: 'icon-list',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Standard Tables',
          url: '/tables/tables',
          icon: 'icon-list'
        }
      ]
    };
    fixture.componentRef.setInput('item', item);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('nav-group')).toBe(true);
  });

  it('should collapse its nav', () => {
    const nav = fixture.nativeElement.querySelector('c-sidebar-nav');
    expect(nav.classList.contains('collapse')).toBe(true);
    expect(nav.classList.contains('show')).toBe(false);

    fixture.nativeElement.querySelector('.nav-group-toggle').click();
    fixture.detectChanges();

    expect(component.open()).toBe(true);
    expect(nav.classList.contains('collapsing')).toBe(true);
    expect(nav.style.display).toBe('block');
  });

  it('should display its nav before the collapse to closed starts', () => {
    const nav = fixture.nativeElement.querySelector('c-sidebar-nav');
    const collapse = fixture.debugElement.query(By.directive(CollapseDirective)).injector.get(CollapseDirective);
    const toggler = fixture.nativeElement.querySelector('.nav-group-toggle');

    toggler.click();
    fixture.detectChanges();
    endTransition(nav);
    fixture.detectChanges();

    expect(nav.classList.contains('show')).toBe(true);
    expect(nav.style.display).toBe('');

    let displayOnCollapsing: string | undefined;
    collapse.collapseChange.subscribe((state: string) => {
      if (state === 'collapsing') {
        displayOnCollapsing = nav.style.display;
      }
    });

    toggler.click();
    fixture.detectChanges();

    expect(component.open()).toBe(false);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
    expect(displayOnCollapsing).toBe('block');
  });
});
