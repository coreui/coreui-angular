import { Component, DebugElement, DOCUMENT, ElementRef, Renderer2, signal, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent, DropdownToggleDirective } from '../dropdown/dropdown.component';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-dropdown #dropdown="cDropdown" visible>
      <ul cDropdownMenu>
        <li>
          <button cDropdownItem [active]="active()" [disabled]="disabled()" tabIndex="0" #item="cDropdownItem">
            Action
          </button>
        </li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class TestComponent {
  readonly disabled = signal(false);
  readonly active = signal(false);
  readonly dropdown = viewChild(DropdownComponent);
  readonly item = viewChild(DropdownItemDirective);
}

describe('DropdownItemDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;
  let document: Document;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2, DropdownService]
    });

    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(DropdownItemDirective));
    component.disabled.set(false);
    await fixture.whenStable(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownItemDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes and attributes', async () => {
    expect(elementRef.nativeElement.hasAttribute('role')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('disabled')).toBe(false);
    expect(elementRef.nativeElement.getAttribute('aria-disabled')).toBeNull();
    expect(elementRef.nativeElement.getAttribute('aria-current')).toBeNull();
    expect(elementRef.nativeElement.getAttribute('tabindex')).toBe('0');
    component.disabled.set(true);
    component.active.set(true);
    await fixture.whenStable();
    expect(elementRef.nativeElement.classList.contains('disabled')).toBe(true);
    expect(elementRef.nativeElement.getAttribute('aria-disabled')).toBe('true');
    expect(elementRef.nativeElement.getAttribute('aria-current')).toBe('true');
    expect(elementRef.nativeElement.getAttribute('tabindex')).toBe('-1');
  });

  it('should call event handling functions', async () => {
    expect(component.dropdown()?.visible()).toBe(true);
    elementRef.nativeElement.dispatchEvent(new Event('click'));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    await fixture.whenStable();
    elementRef.nativeElement.focus();
    // @ts-ignore
    const label = component.item()?.getLabel() ?? undefined;
    expect(label).toBe('Action');
    component.item()?.focus();
    expect(document.activeElement).toBe(elementRef.nativeElement);
  });
});

@Component({
  template: `
    <c-dropdown visible>
      <ul cDropdownMenu>
        <li contenteditable="">
          <span contenteditable="false"><div cDropdownItem id="island">Island</div></span>
        </li>
        <li><button cDropdownItem id="button">Action</button></li>
        <li><a cDropdownItem href="#" id="link">Link</a></li>
        <li><input type="button" cDropdownItem id="inputButton" value="Go" /></li>
        <li cDropdownItem id="host"><button id="inner">Inner</button></li>
        <li cDropdownItem id="fieldHost"><input id="query" /></li>
        <li><div cDropdownItem id="plain">Plain</div></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class EnterTestComponent {
  readonly dropdown = viewChild.required(DropdownComponent);
}

describe('DropdownItemDirective Enter', () => {
  it('should close on Enter keyup only for items without a native Enter click', async () => {
    const fixture = TestBed.createComponent(EnterTestComponent);
    await fixture.whenStable();
    const dropdown = fixture.componentInstance.dropdown();
    const keyup = async (id: string) => {
      fixture.nativeElement
        .querySelector(`#${id}`)
        .dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
      await fixture.whenStable();
    };

    await keyup('button');
    expect(dropdown.visible()).toBe(true);
    await keyup('link');
    expect(dropdown.visible()).toBe(true);
    await keyup('inputButton');
    expect(dropdown.visible()).toBe(true);
    await keyup('inner');
    expect(dropdown.visible()).toBe(true);
    await keyup('query');
    expect(dropdown.visible()).toBe(true);
    await keyup('plain');
    expect(dropdown.visible()).toBe(false);
    dropdown.visible.set(true);
    await fixture.whenStable();
    await keyup('island');
    expect(dropdown.visible()).toBe(false);
    await keyup('plain');
    expect(dropdown.visible()).toBe(false);
  });
});

@Component({
  template: `
    <c-dropdown [autoClose]="autoClose()" [(visible)]="visible">
      <button cDropdownToggle>Toggle</button>
      <div cDropdownMenu>
        <div cDropdownItem id="fieldItem">
          <input id="field" />
          <select id="select">
            <option id="option">One</option>
          </select>
          <textarea id="textarea"></textarea>
          <div contenteditable="true" id="editable">Note</div>
          <input type="button" id="innerInputButton" value="Go" />
          <form><button type="submit" id="formButton" (click)="$event.preventDefault()">Send</button></form>
          <span id="text">Text</span>
        </div>
        <label cDropdownItem id="radioItem"><input type="radio" id="radio" /> Name</label>
        <input type="button" cDropdownItem id="inputButtonItem" value="Apply" />
        <input type="checkbox" cDropdownItem id="checkboxItem" />
      </div>
    </c-dropdown>
  `,
  imports: [DropdownComponent, DropdownMenuDirective, DropdownItemDirective, DropdownToggleDirective]
})
class FieldItemTestComponent {
  readonly autoClose = signal<boolean | 'inside' | 'outside'>(true);
  readonly visible = signal(true);
}

describe('DropdownItemDirective click', () => {
  let fixture: ComponentFixture<FieldItemTestComponent>;

  const visibleAfterClick = async (id: string) => {
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    fixture.nativeElement.querySelector(`#${id}`).click();
    await fixture.whenStable();
    return fixture.componentInstance.visible();
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(FieldItemTestComponent);
    await fixture.whenStable();
  });

  it('should stay open on a click on a form field inside the item with any autoClose', async () => {
    for (const autoClose of [true, false, 'inside', 'outside'] as const) {
      fixture.componentInstance.autoClose.set(autoClose);
      for (const id of ['field', 'select', 'option', 'textarea', 'radio']) {
        expect(await visibleAfterClick(id)).toBe(true);
      }
    }
  });

  it('should not close from the item on a click on a contenteditable inside it', async () => {
    fixture.componentInstance.autoClose.set('outside');
    expect(await visibleAfterClick('editable')).toBe(true);
  });

  it('should close on a click on the item outside its form fields', async () => {
    fixture.componentInstance.autoClose.set('outside');
    for (const id of [
      'fieldItem',
      'text',
      'innerInputButton',
      'formButton',
      'radioItem',
      'inputButtonItem',
      'checkboxItem'
    ]) {
      expect(await visibleAfterClick(id)).toBe(false);
    }
  });
});
