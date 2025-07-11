import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter, Route } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { BreadcrumbRouterComponent } from './breadcrumb-router.component';
import { BreadcrumbRouterService } from './breadcrumb-router.service';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbRouterComponent;
  let componentRef: ComponentRef<BreadcrumbRouterComponent>;
  let fixture: ComponentFixture<BreadcrumbRouterComponent>;
  let harness: RouterTestingHarness;

  const routes: Route[] = [
    { path: 'home', component: BreadcrumbRouterComponent, data: { title: 'Home' } },
    { path: 'color', component: BreadcrumbRouterComponent, title: 'Color' },
    { path: '', component: BreadcrumbRouterComponent }
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BreadcrumbRouterComponent],
      providers: [BreadcrumbRouterService, provideRouter(routes)]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(BreadcrumbRouterComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    harness = await RouterTestingHarness.create();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have breadcrumbs', () => {
    expect(component.breadcrumbs()).toBeDefined();
  });

  it('should get breadcrumbs from service', async () => {
    const comp = await harness.navigateByUrl('/home');
    expect(component.breadcrumbs()).toEqual([{ label: 'Home', url: '/home', queryParams: {} }]);
  });
  it('should get breadcrumbs from service', async () => {
    const comp = await harness.navigateByUrl('/color?id=1&test=2');
    expect(component.breadcrumbs()).toEqual([{ label: 'Color', url: '/color', queryParams: { id: '1', test: '2' } }]);
  });
  it('should get breadcrumbs from service', async () => {
    const comp = await harness.navigateByUrl('/');
    expect(component.breadcrumbs()).toEqual([{ label: '', url: '/', queryParams: {} }]);
  });

  it('should emit breadcrumbs on items change', () => {
    componentRef.setInput('items', [{ label: 'test', url: '/color', attributes: { title: 'test' } }]);
    fixture.detectChanges();
    expect(component.breadcrumbs()).toEqual([{ label: 'test', url: '/color', attributes: { title: 'test' } }]);
  });
});
