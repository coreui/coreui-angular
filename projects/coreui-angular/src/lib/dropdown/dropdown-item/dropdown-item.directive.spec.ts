import { Component, DebugElement, ElementRef, Renderer2, viewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';
import { By } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-dropdown #dropdown="cDropdown" visible>
      <ul cDropdownMenu>
        <li>
          <button cDropdownItem [active]="active" [disabled]="disabled" tabIndex="0" #item="cDropdownItem">
            Action
          </button>
        </li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class TestComponent {
  disabled = false;
  active = false;
  readonly dropdown = viewChild(DropdownComponent);
  readonly item = viewChild(DropdownItemDirective);
}

describe('DropdownItemDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2, DropdownService]
    });

    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(DropdownItemDirective));
    component.disabled = false;
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownItemDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes and attributes', fakeAsync(() => {
    expect(elementRef.nativeElement).not.toHaveClass('disabled');
    expect(elementRef.nativeElement.getAttribute('aria-disabled')).toBeNull();
    expect(elementRef.nativeElement.getAttribute('aria-current')).toBeNull();
    expect(elementRef.nativeElement.getAttribute('tabindex')).toBe('0');
    component.disabled = true;
    component.active = true;
    fixture.detectChanges();
    expect(elementRef.nativeElement).toHaveClass('disabled');
    expect(elementRef.nativeElement.getAttribute('aria-disabled')).toBe('true');
    expect(elementRef.nativeElement.getAttribute('aria-current')).toBe('true');
    expect(elementRef.nativeElement.getAttribute('tabindex')).toBe('-1');
  }));

  it('should call event handling functions', fakeAsync(() => {
    expect(component.dropdown()?.visible()).toBeTrue();
    elementRef.nativeElement.dispatchEvent(new Event('click'));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    fixture.detectChanges();
    elementRef.nativeElement.focus();
    // @ts-ignore
    const label = component.item()?.getLabel() ?? undefined;
    expect(label).toBe('Action');
    component.item()?.focus();
    expect(document.activeElement).toBe(elementRef.nativeElement);
  }));
});
