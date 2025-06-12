import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  DebugElement,
  DOCUMENT,
  ElementRef,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ListenersService } from '../services';
import { PopoverDirective } from './popover.directive';
import { Triggers } from '../coreui.types';

@Component({
  template: '<button cPopover="content" [(cPopoverVisible)]="visible" [cPopoverTrigger]="trigger" >Test</button>',
  imports: [PopoverDirective]
})
export class TestComponent {
  content = 'Test';
  visible = false;
  trigger: Triggers[] = ['hover', 'click'];
}

class MockElementRef extends ElementRef {}

describe('PopoverDirective', () => {
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
    debugElement = fixture.debugElement.query(By.directive(PopoverDirective));
    fixture.autoDetectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new PopoverDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', fakeAsync(() => {
    expect(document.querySelector('.popover.show')).toBeNull();
    component.visible = true;
    fixture.detectChanges();
    tick(500);
    expect(document.querySelector('.popover.show')).toBeTruthy();
    component.visible = false;
    fixture.detectChanges();
    tick(500);
    expect(document.querySelector('.popover.show')).toBeNull();
  }));

  it('should set popover on and off', fakeAsync(() => {
    fixture.autoDetectChanges();
    component.visible = false;
    expect(document.querySelector('.popover.show')).toBeNull();
    debugElement.nativeElement.dispatchEvent(new Event('mouseenter'));
    tick(500);
    expect(document.querySelector('.popover.show')).toBeTruthy();
    debugElement.nativeElement.dispatchEvent(new Event('mouseleave'));
    tick(500);
    expect(document.querySelector('.popover.show')).toBeNull();
  }));

  it('should toggle popover', fakeAsync(() => {
    fixture.autoDetectChanges();
    component.visible = false;
    expect(document.querySelector('.popover.show')).toBeNull();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    tick(500);
    expect(document.querySelector('.popover.show')).toBeTruthy();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    tick(500);
    expect(document.querySelector('.popover.show')).toBeNull();
  }));
});
