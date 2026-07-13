import { Component, DebugElement, DOCUMENT, ElementRef, Renderer2, signal, viewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownService } from '../dropdown.service';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownComponent, DropdownToggleDirective } from '../dropdown/dropdown.component';
import { DropdownItemDirective } from '../dropdown-item/dropdown-item.directive';
import { ButtonDirective } from '../../button';

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-dropdown #dropdown="cDropdown" [(visible)]="visible">
      <button cButton cDropdownToggle color="secondary">Dropdown button</button>
      <ul cDropdownMenu [alignment]="alignment()">
        <li>
          <button cDropdownItem [active]="true" tabIndex="0" #item="cDropdownItem">Action</button>
        </li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownComponent, DropdownMenuDirective, DropdownItemDirective, ButtonDirective, DropdownToggleDirective]
})
class TestComponent {
  readonly visible = signal(true);
  readonly alignment = signal<string>('');
  readonly dropdown = viewChild(DropdownComponent);
  readonly menu = viewChild(DropdownMenuDirective);
  readonly item = viewChild(DropdownItemDirective);
}

describe('DropdownMenuDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let dropdownRef: DebugElement;
  let elementRef: DebugElement;
  let itemRef: DebugElement;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2, DropdownService]
    });
    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    dropdownRef = fixture.debugElement.query(By.directive(DropdownComponent));
    elementRef = fixture.debugElement.query(By.directive(DropdownMenuDirective));
    itemRef = fixture.debugElement.query(By.directive(DropdownItemDirective));
    component.visible.set(true);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownMenuDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', fakeAsync(() => {
    component.visible.set(false);
    fixture.detectChanges();
    expect(dropdownRef.nativeElement).not.toHaveClass('show');
    expect(elementRef.nativeElement).toHaveClass('dropdown-menu');
    expect(elementRef.nativeElement).not.toHaveClass('dropdown-menu-end');
    expect(elementRef.nativeElement).not.toHaveClass('dropdown-menu-start');
    expect(elementRef.nativeElement).not.toHaveClass('show');
    component.visible.set(true);
    component.alignment.set('end');
    fixture.detectChanges();
    expect(dropdownRef.nativeElement).toHaveClass('show');
    expect(elementRef.nativeElement).toHaveClass('dropdown-menu-end');
    expect(elementRef.nativeElement).not.toHaveClass('dropdown-menu-start');
    expect(elementRef.nativeElement).toHaveClass('show');
    component.alignment.set('start');
    fixture.detectChanges();
    expect(elementRef.nativeElement).not.toHaveClass('dropdown-menu-end');
    expect(elementRef.nativeElement).toHaveClass('dropdown-menu-start');
    component.alignment.set('');
    fixture.detectChanges();
    expect(elementRef.nativeElement).not.toHaveClass('dropdown-menu-end');
    expect(elementRef.nativeElement).not.toHaveClass('dropdown-menu-start');
  }));

  it('should call event handling functions', fakeAsync(() => {
    expect(document.activeElement).not.toEqual(elementRef.nativeElement);
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab' }));
    component.visible.set(true);
    fixture.detectChanges();
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab' }));
    elementRef.nativeElement.focus();
    fixture.detectChanges();
    expect(document.activeElement).toEqual(itemRef.nativeElement);
  }));
});
