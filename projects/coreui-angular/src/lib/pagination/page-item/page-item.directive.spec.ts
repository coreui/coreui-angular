import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Component, ComponentRef, DebugElement, input, Renderer2 } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';

import { PageLinkDirective } from '../page-link/page-link.directive';
import { PageItemComponent } from './page-item.component';
import { PageItemDirective } from './page-item.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'c-test',
  imports: [PageItemComponent, PageLinkDirective, PageItemComponent, PageLinkDirective, RouterLink],
  template: `
    <c-page-item [disabled]="disabled()">
      <a cPageLink [routerLink]="[]">Previous</a>
    </c-page-item>
  `
})
export class TestComponent {
  readonly disabled = input(false);
}

describe('PageItemDirective', () => {
  let component: TestComponent;
  let componentRef: ComponentRef<TestComponent>;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [Renderer2, provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    debugElement = fixture.debugElement.query(By.directive(PageLinkDirective));
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new PageItemDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should toggle disable state for the component', fakeAsync(() => {
    expect(debugElement.nativeElement.getAttribute('aria-disabled')).toBeNull();
    expect(debugElement.nativeElement.getAttribute('tabindex')).toBeNull();
    componentRef.setInput('disabled', true);
    tick();
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('aria-disabled')).toBe('true');
    expect(debugElement.nativeElement.getAttribute('tabindex')).toBe('-1');
    componentRef.setInput('disabled', false);
    tick();
    fixture.detectChanges();
  }));
});
