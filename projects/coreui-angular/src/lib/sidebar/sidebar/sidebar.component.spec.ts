import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { SidebarComponent } from './sidebar.component';
import { SidebarService } from '../sidebar.service';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('sidebar-fixed')).toBe(true);
  });

  it('should toggle inert with visibility', async () => {
    expect(fixture.nativeElement.inert).toBe(true);

    component.sidebarState = { visible: true };
    await fixture.whenStable();
    expect(fixture.nativeElement.inert).toBeFalsy();

    component.sidebarState = { visible: false };
    await fixture.whenStable();
    expect(fixture.nativeElement.inert).toBe(true);
  });

  it('should clear the backdrop when a visible mobile sidebar is destroyed', async () => {
    component.sidebarState = { mobile: true, visible: true };
    await fixture.whenStable();
    expect(document.querySelector('.sidebar-backdrop')).not.toBeNull();

    fixture.destroy();

    expect(document.querySelector('.sidebar-backdrop')).toBeNull();
  });
});

@Component({
  template: `
    <c-sidebar id="start"></c-sidebar>
    <c-sidebar id="end" placement="end"></c-sidebar>
  `,
  imports: [SidebarComponent]
})
class TwoSidebarsComponent {}

describe('SidebarComponent state', () => {
  let fixture: ComponentFixture<TwoSidebarsComponent>;
  let service: SidebarService;
  let start: SidebarComponent;
  let startElement: HTMLElement;
  let endElement: HTMLElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TwoSidebarsComponent);
    await fixture.whenStable();
    service = TestBed.inject(SidebarService);
    const [startRef, endRef] = fixture.debugElement.queryAll(By.directive(SidebarComponent));
    start = startRef.componentInstance;
    startElement = startRef.nativeElement;
    endElement = endRef.nativeElement;
  });

  it('should toggle the visibility through the sidebar service', async () => {
    service.toggle({ toggle: 'visible', sidebar: start });
    await fixture.whenStable();
    expect(startElement.classList.contains('show')).toBe(true);
    expect(startElement.inert).toBeFalsy();
    expect(endElement.classList.contains('hide')).toBe(true);

    service.toggle({ toggle: 'visible', sidebar: start });
    await fixture.whenStable();
    expect(startElement.classList.contains('hide')).toBe(true);
    expect(startElement.inert).toBe(true);
  });

  it('should toggle unfoldable through the sidebar service', async () => {
    service.toggle({ toggle: 'unfoldable', sidebar: start });
    await fixture.whenStable();
    expect(startElement.classList.contains('sidebar-narrow-unfoldable')).toBe(true);

    service.toggle({ toggle: 'unfoldable', sidebar: start });
    await fixture.whenStable();
    expect(startElement.classList.contains('sidebar-narrow-unfoldable')).toBe(false);
  });

  it('should apply a state addressed by id only to that sidebar', async () => {
    service.toggle({ id: 'end', visible: true });
    await fixture.whenStable();
    expect(endElement.classList.contains('show')).toBe(true);
    expect(startElement.classList.contains('hide')).toBe(true);
  });

  it('should narrow through the narrow setter unless unfoldable', async () => {
    start.narrow = true;
    await fixture.whenStable();
    expect(start.narrow).toBe(true);
    expect(startElement.classList.contains('sidebar-narrow')).toBe(true);

    service.toggle({ toggle: 'unfoldable', sidebar: start });
    await fixture.whenStable();
    expect(startElement.classList.contains('sidebar-narrow')).toBe(false);
    expect(startElement.classList.contains('sidebar-narrow-unfoldable')).toBe(true);
  });
});

@Component({
  template: `
    <c-sidebar visible>
      <c-sidebar-nav [navItems]="navItems" />
    </c-sidebar>
  `,
  imports: [SidebarComponent, SidebarNavComponent]
})
class MobileSidebarComponent {
  readonly navItems = [{ name: 'Dashboard', url: '/dashboard' }];
}

describe('SidebarComponent on mobile', () => {
  let fixture: ComponentFixture<MobileSidebarComponent>;
  let layout: Subject<boolean>;
  let sidebar: SidebarComponent;
  let element: HTMLElement;

  const setMobile = async (mobile: boolean) => {
    layout.next(mobile);
    await fixture.whenStable();
  };

  const toggleVisible = async () => {
    TestBed.inject(SidebarService).toggle({ toggle: 'visible', sidebar });
    await fixture.whenStable();
  };

  beforeEach(async () => {
    layout = new Subject<boolean>();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: '**', children: [] }]),
        {
          provide: BreakpointObserver,
          useValue: {
            observe: (queries: string[]) =>
              layout.pipe(
                map((matches) => ({
                  matches,
                  breakpoints: Object.fromEntries(queries.map((query) => [query, matches]))
                }))
              )
          }
        }
      ]
    });
    fixture = TestBed.createComponent(MobileSidebarComponent);
    await fixture.whenStable();
    const sidebarRef = fixture.debugElement.query(By.directive(SidebarComponent));
    sidebar = sidebarRef.componentInstance;
    element = sidebarRef.nativeElement;
  });

  it('should hide on mobile and restore its initial visibility on desktop', async () => {
    expect(element.classList.contains('show')).toBe(true);

    await setMobile(true);
    expect(sidebar.sidebarState.mobile).toBe(true);
    expect(element.classList.contains('hide')).toBe(true);
    expect(element.classList.contains('sidebar-fixed')).toBe(false);

    await setMobile(false);
    expect(sidebar.sidebarState.mobile).toBe(false);
    expect(element.classList.contains('show')).toBe(true);
    expect(element.classList.contains('sidebar-fixed')).toBe(true);
  });

  it('should show a backdrop on mobile that hides the sidebar on click', async () => {
    await setMobile(true);
    await toggleVisible();
    const backdrop = document.querySelector<HTMLElement>('.sidebar-backdrop');
    expect(backdrop?.classList.contains('show')).toBe(true);

    backdrop?.click();
    await fixture.whenStable();
    expect(element.classList.contains('hide')).toBe(true);
    expect(document.querySelector('.sidebar-backdrop')).toBeNull();
  });

  it('should remove the backdrop when the layout changes to desktop', async () => {
    await setMobile(true);
    await toggleVisible();
    expect(document.querySelector('.sidebar-backdrop')).not.toBeNull();

    await setMobile(false);
    expect(document.querySelector('.sidebar-backdrop')).toBeNull();
  });

  it('should hide after a nav link click on mobile only', async () => {
    const link = (): HTMLElement => fixture.nativeElement.querySelector('c-sidebar-nav a');

    link().click();
    await fixture.whenStable();
    expect(element.classList.contains('show')).toBe(true);

    await setMobile(true);
    await toggleVisible();
    link().click();
    await fixture.whenStable();
    expect(element.classList.contains('hide')).toBe(true);
  });
});
