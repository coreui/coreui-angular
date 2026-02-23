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
import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  beforeEach(async () => {
    // // Mock IntersectionObserver for jsdom
    // (globalThis as any).IntersectionObserver = class IntersectionObserver {
    //   observe = vi.fn();
    //   unobserve = vi.fn();
    //   disconnect = vi.fn();
    //   takeRecords = vi.fn().mockReturnValue([]);
    // };

    vi.useFakeTimers();

    await TestBed.configureTestingModule({
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
    fixture.whenStable();
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(TooltipDirective));
    fixture.autoDetectChanges();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TooltipDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', async () => {
    expect(document.querySelector('.tooltip.show')).toBeNull();
    component.visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    component.visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeNull();
  });

  it('should set popover on and off', async () => {
    fixture.autoDetectChanges();
    component.visible.set(false);
    expect(document.querySelector('.tooltip.show')).toBeNull();
    debugElement.nativeElement.dispatchEvent(new Event('mouseenter'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    debugElement.nativeElement.dispatchEvent(new Event('mouseleave'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeNull();
  });

  it('should toggle popover', async () => {
    fixture.autoDetectChanges();
    component.visible.set(false);
    expect(document.querySelector('.tooltip.show')).toBeNull();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeNull();
  });
});
