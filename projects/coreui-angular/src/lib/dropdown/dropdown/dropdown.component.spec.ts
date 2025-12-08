import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { DropdownComponent, DropdownToggleDirective } from './dropdown.component';
import { Component, DebugElement, DOCUMENT, ElementRef, signal } from '@angular/core';
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('dropdown');
  });
});

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-dropdown #dropdown="cDropdown" [(visible)]="visible" direction="dropup" [variant]="variant()">
      <div cDropdownToggle [caret]="caret" [split]="split" [disabled]="disabled" [dropdownComponent]="dropdown"></div>
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
  readonly variant = signal<'btn-group' | 'dropdown' | 'input-group' | 'nav-item' | undefined>('nav-item');
  readonly visible = signal(false);
  disabled = false;
  caret = true;
  split = false;
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

  it('should have css classes and attributes', fakeAsync(() => {
    expect(elementRef.nativeElement).not.toHaveClass('disabled');
    expect(elementRef.nativeElement).toHaveClass('dropdown-toggle');
    expect(elementRef.nativeElement).not.toHaveClass('dropdown-toggle-split');
    component.variant.set('input-group');
    component.disabled = true;
    component.split = true;
    component.caret = false;
    fixture.detectChanges();
    expect(elementRef.nativeElement).toHaveClass('disabled');
    expect(elementRef.nativeElement).not.toHaveClass('dropdown-toggle');
    expect(elementRef.nativeElement).toHaveClass('dropdown-toggle-split');
    expect(elementRef.nativeElement.getAttribute('aria-expanded')).toBe('false');
    component.variant.set('nav-item');
    component.visible.set(true);
    fixture.detectChanges();
    expect(elementRef.nativeElement.getAttribute('aria-expanded')).toBe('true');
  }));

  it('should call event handling functions', fakeAsync(() => {
    expect(component.visible()).toBeFalse();
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBeTrue();
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBeFalse();
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBeTrue();
    dropdownRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
    fixture.detectChanges();
    expect(component.visible()).toBeFalse();
    component.visible.set(true);
    fixture.detectChanges();
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab' }));
    fixture.detectChanges();
    expect(component.visible()).toBeFalse();
  }));
});
