import { Component, DebugElement, ElementRef, Renderer2, signal, viewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownService } from '../dropdown.service';
import { DropdownCloseDirective } from './dropdown-close.directive';
import { ButtonCloseDirective } from '../../button';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-dropdown #dropdown="cDropdown" visible>
      <div cDropdownMenu>
        <button
          cButtonClose
          cDropdownClose
          [disabled]="disabled()"
          [dropdownComponent]="dropdown"
          tabIndex="0"
        ></button>
      </div>
    </c-dropdown>
  `,
  imports: [ButtonCloseDirective, DropdownComponent, DropdownMenuDirective, DropdownCloseDirective]
})
class TestComponent {
  readonly disabled = signal(false);
  readonly dropdown = viewChild(DropdownComponent);
}

describe('DropdownCloseDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2, DropdownService]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(DropdownCloseDirective));
    component.disabled.set(false);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownCloseDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes and attributes', fakeAsync(() => {
    expect(elementRef.nativeElement).not.toHaveClass('disabled');
    expect(elementRef.nativeElement.getAttribute('aria-disabled')).toBeNull();
    expect(elementRef.nativeElement.getAttribute('tabindex')).toBe('0');
    component.disabled.set(true);
    fixture.detectChanges();
    expect(elementRef.nativeElement).toHaveClass('disabled');
    expect(elementRef.nativeElement.getAttribute('aria-disabled')).toBe('true');
    expect(elementRef.nativeElement.getAttribute('tabindex')).toBe('-1');
  }));

  it('should call event handling functions', fakeAsync(() => {
    expect(component.dropdown()?.visible()).toBeTrue();
    elementRef.nativeElement.dispatchEvent(new Event('click'));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    expect(component.dropdown()?.visible()).toBeFalse();
  }));
});
