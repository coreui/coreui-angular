import { Component, ComponentRef, DebugElement, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PlaceholderDirective } from './placeholder.directive';
import { PlaceholderAnimationDirective } from './placeholder-animation.directive';

@Component({
    template: `
    <p [cPlaceholderAnimation]="animation()">
      <span [cPlaceholder]="visible()" cPlaceholderSize="sm"></span>
    </p>
  `,
    imports: [PlaceholderDirective, PlaceholderAnimationDirective]
})
class TestComponent {
    readonly visible = input(true);
    readonly animation = input<'glow' | 'wave' | undefined>(undefined);
}

describe('PlaceholderDirective', () => {
    let component: TestComponent;
    let componentRef: ComponentRef<TestComponent>;
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;
    let wrapperElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        componentRef = fixture.componentRef;
        debugElement = fixture.debugElement.query(By.directive(PlaceholderDirective));
        wrapperElement = fixture.debugElement.query(By.directive(PlaceholderAnimationDirective));
    });

    it('should create an instance', () => {
        TestBed.runInInjectionContext(() => {
            const directive = new PlaceholderDirective();
            expect(directive).toBeTruthy();
        });
    });

    it('should toggle visibility for the placeholder', () => {
        componentRef.setInput('visible', true);
        fixture.detectChanges();
        expect(debugElement.nativeElement.classList.contains('placeholder')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('placeholder-sm')).toBe(true);
        componentRef.setInput('visible', false);
        fixture.detectChanges();
        expect(debugElement.nativeElement.getAttribute('aria-hidden')).toBe('true');
        expect(debugElement.nativeElement.classList.contains('placeholder')).toBe(false);
    });

    it('should toggle animation for the placeholder', () => {
        expect(wrapperElement.nativeElement.classList.contains('placeholder-glow')).toBe(false);
        componentRef.setInput('animation', 'glow');
        fixture.detectChanges();
        expect(wrapperElement.nativeElement.classList.contains('placeholder-glow')).toBe(true);
    });
});
