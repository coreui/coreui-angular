/// <reference types="vitest/globals" />
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ComponentRef, DOCUMENT } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OffcanvasComponent } from './offcanvas.component';
import { OffcanvasService } from '../offcanvas.service';

describe('OffcanvasComponent', () => {
  let component: OffcanvasComponent;
  let componentRef: ComponentRef<OffcanvasComponent>;
  let fixture: ComponentFixture<OffcanvasComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OffcanvasComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    document = TestBed.inject(DOCUMENT);
    fixture.nativeElement.style.position = 'fixed';
    fixture.detectChanges();

    vi.useFakeTimers();
  });

  afterEach(async () => {
    if (componentRef) {
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    }
    vi.useRealTimers();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should clear the backdrop when the component is destroyed while visible', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.offcanvas-backdrop')).not.toBeNull();

    fixture.destroy();
    await vi.runAllTimersAsync();

    expect(document.querySelector('.offcanvas-backdrop')).toBeNull();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('offcanvas')).toBe(true);
    expect(fixture.nativeElement.classList.contains('offcanvas-start')).toBe(true);
    expect(fixture.nativeElement.getAttribute('id')).toContain('offcanvas-start-');
  });

  it('should set tabindex to -1', () => {
    expect(fixture.nativeElement.getAttribute('tabindex')).toBe('-1');
  });

  it('should react to visible changes', async () => {
    expect(componentRef.instance.visible()).toBe(false);
    expect(fixture.nativeElement.inert).toBe(true);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(componentRef.instance.visible()).toBe(true);
    expect(fixture.nativeElement.inert).toBeFalsy();
  });

  it('should close offcanvas to Esc keydown event', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
    expect(fixture.nativeElement.inert).toBeFalsy();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(false);
    expect(fixture.nativeElement.inert).toBe(true);
  });

  it('should close offcanvas on backdrop click', async () => {
    componentRef.setInput('backdrop', true);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
    expect(componentRef.location.nativeElement.classList).toContain('show');
    const backdrop = document.querySelector('.offcanvas-backdrop');
    expect(backdrop).not.toBeNull();
    await vi.runAllTimersAsync();
    // console.log(backdrop);
    expect(backdrop?.classList.contains('show')).toBe(true);
    backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    // console.log(backdrop);
    expect(componentRef.location.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should return breakpoint value', async () => {
    componentRef.setInput('responsive', 'false');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(fixture.componentInstance.responsiveBreakpoint).toBe(false);
  });

  it('should not carry the hiding class before it was ever shown', async () => {
    await vi.runAllTimersAsync();
    expect(fixture.nativeElement.classList.contains('hiding')).toBe(false);
    expect(fixture.nativeElement.classList.contains('showing')).toBe(false);
  });

  it('should add the hiding class only for a real hide transition', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('hiding')).toBe(true);
    await vi.runAllTimersAsync();
    expect(fixture.nativeElement.classList.contains('hiding')).toBe(false);
  });

  it('should render role and aria-modal only while open', async () => {
    expect(fixture.nativeElement.getAttribute('role')).toBeNull();
    expect(fixture.nativeElement.getAttribute('aria-modal')).toBeNull();
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('role')).toBe('dialog');
    expect(fixture.nativeElement.getAttribute('aria-modal')).toBe('true');
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('role')).toBeNull();
    expect(fixture.nativeElement.getAttribute('aria-modal')).toBeNull();
  });

  it('should set inert only when the closed offcanvas is positioned as a panel', async () => {
    expect(fixture.nativeElement.inert).toBe(true);
    fixture.nativeElement.style.position = 'static';
    fixture.detectChanges();
    fixture.detectChanges();
    expect(fixture.nativeElement.inert).toBeFalsy();
  });

  it('should re-evaluate the panel position on window resize', async () => {
    expect(componentRef.instance.ariaHidden()).toBe(true);
    fixture.nativeElement.style.position = 'static';
    window.dispatchEvent(new Event('resize'));
    expect(componentRef.instance.ariaHidden()).toBeNull();
  });

  it('should re-evaluate the panel position when responsive changes', async () => {
    fixture.nativeElement.style.position = 'static';
    componentRef.setInput('responsive', 'lg');
    fixture.detectChanges();
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('offcanvas-lg')).toBe(true);
    expect(fixture.nativeElement.inert).toBeFalsy();
  });

  it('should enable the focus trap only while open', async () => {
    const trap = fixture.debugElement.query(By.directive(CdkTrapFocus)).injector.get(CdkTrapFocus);
    expect(trap.enabled).toBe(false);
    expect(trap.autoCapture).toBe(false);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(trap.enabled).toBe(true);
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(trap.enabled).toBe(false);
  });

  describe('focus return', () => {
    let input: HTMLInputElement;
    let service: OffcanvasService;
    let trigger: HTMLButtonElement;

    const toggle = async (show: boolean | 'toggle', toggleTrigger?: HTMLElement) => {
      service.toggle({ show, id: component.id(), trigger: toggleTrigger });
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    };

    beforeEach(() => {
      service = TestBed.inject(OffcanvasService);
      input = document.createElement('input');
      trigger = document.createElement('button');
      document.body.append(input, trigger);
    });

    afterEach(() => {
      input.remove();
      trigger.remove();
    });

    it('should return focus to the toggle that opened it', async () => {
      const closeButton = document.createElement('button');
      fixture.nativeElement.append(closeButton);
      input.focus();
      await toggle('toggle', trigger);
      closeButton.focus();
      await toggle('toggle', closeButton);
      expect(document.activeElement).toBe(trigger);
    });

    it('should return focus to the element focused before opening without a toggle', async () => {
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(document.activeElement).toBe(fixture.nativeElement);
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it('should keep the element focused before opening when an input changes while open', async () => {
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      componentRef.setInput('backdrop', 'static');
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it('should not reuse the toggle of an earlier opening', async () => {
      await toggle(true, trigger);
      await toggle(false);
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it('should return focus that fell to the body', async () => {
      await toggle(true, trigger);
      (document.activeElement as HTMLElement).blur();
      expect(document.activeElement).toBe(document.body);
      await toggle(false);
      expect(document.activeElement).toBe(trigger);
    });

    it('should fall back when the toggle cannot take focus', async () => {
      input.focus();
      await toggle(true, trigger);
      trigger.disabled = true;
      await toggle(false);
      expect(document.activeElement).toBe(input);
    });

    it('should return focus when destroyed while open', async () => {
      await toggle(true, trigger);
      expect(document.activeElement).toBe(fixture.nativeElement);
      fixture.destroy();
      expect(document.activeElement).toBe(trigger);
    });

    it('should not move focus that left the panel', async () => {
      await toggle(true, trigger);
      input.focus();
      await toggle(false);
      expect(document.activeElement).toBe(input);
    });

    it('should not focus a detached element', async () => {
      await toggle(true, trigger);
      trigger.remove();
      const focus = vi.spyOn(trigger, 'focus');
      await toggle(false);
      expect(focus).not.toHaveBeenCalled();
    });
  });

  describe('with portal', () => {
    let container: HTMLDivElement;
    let originalParent: HTMLElement;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      document.body.appendChild(fixture.nativeElement);
      originalParent = fixture.nativeElement.parentElement;
    });

    afterEach(() => {
      container.remove();
    });

    it('should default the container input to document.body', () => {
      expect(component.container()).toBe(document.body);
    });

    it('should not move the offcanvas element when portal is disabled', async () => {
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(container.contains(fixture.nativeElement)).toBe(false);
      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should move the offcanvas element into the given container when portal is enabled', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(container);
    });

    it('should resolve a container provided as a function', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', () => container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(container);
    });

    it('should not attach the portal when the container resolves to null', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', null);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should restore the offcanvas element to its original position once the close transition ends', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(fixture.nativeElement.parentElement).toBe(container);

      fixture.nativeElement.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'transform' }));

      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should restore the offcanvas element when the close transition never fires', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(originalParent);
      expect(fixture.nativeElement.classList.contains('hiding')).toBe(false);
    });

    it('should not run the hide completion for an offcanvas that was never shown', async () => {
      document.body.style.overflow = 'hidden';
      const localFixture = TestBed.createComponent(OffcanvasComponent);
      localFixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(document.body.style.overflow).toBe('hidden');

      localFixture.destroy();
      document.body.style.removeProperty('overflow');
    });

    it('should commit the hidden starting style after the move, before the show classes are applied', async () => {
      const element: HTMLElement = fixture.nativeElement;
      const reflows: { parent: Element | null; classes: string }[] = [];
      Object.defineProperty(element, 'offsetHeight', {
        configurable: true,
        get: () => {
          reflows.push({ parent: element.parentElement, classes: element.getAttribute('class') ?? '' });
          return 0;
        }
      });

      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(reflows).toHaveLength(1);
      expect(reflows[0].parent).toBe(container);
      expect(reflows[0].classes).not.toContain('show');
    });

    it('should move the offcanvas to a new container when the container input changes while visible', async () => {
      const secondContainer = document.createElement('div');
      document.body.appendChild(secondContainer);

      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      componentRef.setInput('container', secondContainer);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(secondContainer);
      secondContainer.remove();
    });

    it('should restore the offcanvas to its original position when portal is disabled while visible', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      componentRef.setInput('portal', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should detach the portal when the component is destroyed', async () => {
      const localFixture = TestBed.createComponent(OffcanvasComponent);
      const localComponentRef = localFixture.componentRef;
      await localFixture.whenStable();
      document.body.appendChild(localFixture.nativeElement);

      localComponentRef.setInput('portal', true);
      localComponentRef.setInput('container', container);
      localComponentRef.setInput('visible', true);
      localFixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(localFixture.nativeElement.parentElement).toBe(container);

      localFixture.destroy();

      expect(container.contains(localFixture.nativeElement)).toBe(false);
    });
  });
});
