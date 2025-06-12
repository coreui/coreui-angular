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
import { TooltipDirective } from './tooltip.directive';
import { Triggers } from '../coreui.types';
import { ListenersService } from '../services';

@Component({
  template: '<button cTooltip="content" [(cTooltipVisible)]="visible" [cTooltipTrigger]="trigger" >Test</button>',
  imports: [TooltipDirective]
})
export class TestComponent {
  content = 'Test';
  visible = false;
  trigger: Triggers[] = ['hover', 'click'];
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
    component.visible = true;
    fixture.detectChanges();
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    component.visible = false;
    fixture.detectChanges();
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeNull();
  }));

  it('should set popover on and off', fakeAsync(() => {
    fixture.autoDetectChanges();
    component.visible = false;
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
    component.visible = false;
    expect(document.querySelector('.tooltip.show')).toBeNull();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    tick(500);
    expect(document.querySelector('.tooltip.show')).toBeNull();
  }));
});
