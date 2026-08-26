import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent, DropdownToggleDirective } from './dropdown.component';
import { Component, DebugElement, DOCUMENT, ElementRef, input, signal } from '@angular/core';
import { DropdownAlignment } from '../../coreui.types';
import { DropdownService } from '../dropdown.service';
import { By } from '@angular/platform-browser';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';
import { DropdownItemDirective } from '../dropdown-item/dropdown-item.directive';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('dropdown')).toBe(true);
  });
});

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-dropdown #dropdown="cDropdown" [(visible)]="visible" [alignment]="alignment()" direction="dropup" [variant]="variant()">
      <div
        cDropdownToggle
        [caret]="caret()"
        [split]="split()"
        [disabled]="disabled()"
        [dropdownComponent]="dropdown"
      ></div>
      <ul cDropdownMenu>
        <li><a cDropdownItem>Action</a></li>
        <li><a cDropdownItem>Another action</a></li>
        <li><a cDropdownItem>Something else here</a></li>
        <li><a cDropdownItem>Separated link</a></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class TestComponent {
  readonly alignment = signal<DropdownAlignment | undefined>(undefined);
  readonly variant = signal<'btn-group' | 'dropdown' | 'input-group' | 'nav-item' | undefined>('nav-item');
  readonly visible = signal(false);
  readonly disabled = input(false);
  readonly caret = input(true);
  readonly split = input(false);
}

describe('DropdownToggleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;
  let dropdownRef: DebugElement;
  let service: DropdownService;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        DropdownService,
        DropdownComponent
        // Renderer2,
        // ChangeDetectorRef
      ]
    });
    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(DropdownToggleDirective));
    dropdownRef = fixture.debugElement.query(By.directive(DropdownComponent));
    service = new DropdownService();

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownToggleDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes and attributes', async () => {
    expect(elementRef.nativeElement.classList.contains('disabled')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle-split')).toBe(false);
    component.variant.set('input-group');
    fixture.componentRef.setInput('disabled', true);
    fixture.componentRef.setInput('split', true);
    fixture.componentRef.setInput('caret', false);
    fixture.detectChanges();
    expect(elementRef.nativeElement.classList.contains('disabled')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle-split')).toBe(true);
    expect(elementRef.nativeElement.getAttribute('aria-expanded')).toBe('false');
    component.variant.set('nav-item');
    component.visible.set(true);
    fixture.detectChanges();
    expect(elementRef.nativeElement.getAttribute('aria-expanded')).toBe('true');
  });

  it('should pass its alignment down to the menu', async () => {
    const menu = fixture.debugElement.query(By.directive(DropdownMenuDirective)).nativeElement;

    component.alignment.set('end');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(menu.classList.contains('dropdown-menu-end')).toBe(true);

    component.alignment.set({ xs: 'end', lg: 'start' });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(menu.classList.contains('dropdown-menu-end')).toBe(true);
    expect(menu.classList.contains('dropdown-menu-lg-start')).toBe(true);
  });

  it('should skip dynamic positioning for responsive alignment', async () => {
    const dropdown = dropdownRef.injector.get(DropdownComponent);

    component.visible.set(true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(dropdown['popperInstance']).toBeDefined();

    component.visible.set(false);
    fixture.detectChanges();
    await fixture.whenStable();

    component.alignment.set({ lg: 'end' });
    component.visible.set(true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(dropdown['popperInstance']).toBeUndefined();
  });

  it('should call event handling functions', async () => {
    expect(component.visible()).toBe(false);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBe(true);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBe(false);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBe(true);
    dropdownRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
    fixture.detectChanges();
    expect(component.visible()).toBe(false);
    component.visible.set(true);
    fixture.detectChanges();
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab' }));
    fixture.detectChanges();
    expect(component.visible()).toBe(false);
  });
});

@Component({
  template: `
    <c-dropdown [alignment]="first()">
      <div cDropdownToggle></div>
      <ul cDropdownMenu id="first"></ul>
    </c-dropdown>
    <c-dropdown [alignment]="second()">
      <div cDropdownToggle></div>
      <ul cDropdownMenu id="second"></ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective]
})
class TwoDropdownsComponent {
  readonly first = signal<DropdownAlignment | undefined>(undefined);
  readonly second = signal<DropdownAlignment | undefined>(undefined);
}

describe('DropdownComponent alignment scope', () => {
  it('should keep each dropdown alignment to itself', async () => {
    const fixture = TestBed.createComponent(TwoDropdownsComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const first = fixture.debugElement.query(By.css('#first')).nativeElement;
    const second = fixture.debugElement.query(By.css('#second')).nativeElement;

    component.first.set('end');
    component.second.set({ lg: 'start' });
    fixture.detectChanges();
    await fixture.whenStable();

    expect(first.classList.contains('dropdown-menu-end')).toBe(true);
    expect(first.classList.contains('dropdown-menu-lg-start')).toBe(false);
    expect(second.classList.contains('dropdown-menu-lg-start')).toBe(true);
    expect(second.classList.contains('dropdown-menu-end')).toBe(false);
  });
});
