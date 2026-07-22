import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  DebugElement,
  DOCUMENT,
  ElementRef,
  Renderer2,
  signal,
  ViewContainerRef
} from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TooltipDirective } from './tooltip.directive';
import { Triggers } from '../coreui.types';
import { ListenersService } from '../services';

@Component({
  template:
    '<button cTooltip="content" [(cTooltipVisible)]="visible" [cTooltipTrigger]="trigger" >{{content()}}</button>',
  imports: [TooltipDirective]
})
export class TestComponent {
  readonly content = signal('Test');
  readonly visible = signal(false);
  readonly trigger: Triggers[] = ['hover', 'click'];
}

class MockElementRef extends ElementRef {}

describe('TooltipDirective', () => {
  let component: TestComponent;
  let componentRef: ComponentRef<TestComponent>;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [
        // IntersectionService,
        Renderer2,
        ListenersService,
        { provide: ElementRef, useClass: MockElementRef },
        ViewContainerRef,
        ChangeDetectorRef
      ]
    }).compileComponents();
    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(TooltipDirective));
    fixture.autoDetectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TooltipDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', fakeAsync(() => {
    expect(document.querySelector('.tooltip.show')).toBeNull();
    component.visible.set(true);
    fixture.detectChanges();
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    component.visible.set(false);
    fixture.detectChanges();
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeNull();
  }));

  it('should set popover on and off', fakeAsync(() => {
    fixture.autoDetectChanges();
    component.visible.set(false);
    expect(document.querySelector('.tooltip.show')).toBeNull();
    debugElement.nativeElement.dispatchEvent(new Event('mouseenter'));
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    debugElement.nativeElement.dispatchEvent(new Event('mouseleave'));
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeNull();
  }));

  it('should toggle popover', fakeAsync(() => {
    fixture.autoDetectChanges();
    component.visible.set(false);
    expect(document.querySelector('.tooltip.show')).toBeNull();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeNull();
  }));

  it('should close the tooltip when Escape is pressed while visible', fakeAsync(() => {
    component.visible.set(true);
    fixture.detectChanges();
    tick(500);
    expect(component.visible()).toBeTrue();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    tick(500);

    expect(component.visible()).toBeFalse();
    expect(document.querySelector('.tooltip.show')).toBeNull();
  }));

  it('should not close the tooltip when a non-Escape key is pressed', fakeAsync(() => {
    component.visible.set(true);
    fixture.detectChanges();
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    fixture.detectChanges();
    tick(500);

    expect(component.visible()).toBeTrue();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
  }));

  it('should add the document keydown listener while visible and remove it when hidden', fakeAsync(() => {
    const addSpy = spyOn(document, 'addEventListener').and.callThrough();
    const removeSpy = spyOn(document, 'removeEventListener').and.callThrough();

    component.visible.set(true);
    fixture.detectChanges();
    tick(500);

    expect(addSpy).toHaveBeenCalledWith('keydown', jasmine.any(Function), true);

    component.visible.set(false);
    fixture.detectChanges();
    tick(500);

    expect(removeSpy).toHaveBeenCalledWith('keydown', jasmine.any(Function), true);

    // no lingering listener: pressing Escape after hiding does nothing
    removeSpy.calls.reset();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    tick(500);
    expect(component.visible()).toBeFalse();
  }));

  it('should remove the document keydown listener when the directive is destroyed while visible', fakeAsync(() => {
    component.visible.set(true);
    fixture.detectChanges();
    tick(500);

    const removeSpy = spyOn(document, 'removeEventListener').and.callThrough();

    fixture.destroy();

    expect(removeSpy).toHaveBeenCalledWith('keydown', jasmine.any(Function), true);

    // the handler is gone: an Escape keypress no longer flips the model
    component.visible.set(true);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    tick(500);
    expect(component.visible()).toBeTrue();
  }));
});
