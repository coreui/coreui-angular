import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderDirective } from './border.directive';
import { Component, DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    imports: [BorderDirective],
    template: '<div [cBorder]="border()"></div>'
})
class TestComponent {
    readonly border = input(1);
}

describe('BorderDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.directive(BorderDirective));
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        TestBed.runInInjectionContext(() => {
            const directive = new BorderDirective();
            expect(directive).toBeTruthy();
        });
    });

    it('should have css classes', () => {
        expect(debugElement.nativeElement.classList.contains('border-1')).toBe(true);
        fixture.componentRef.setInput('border', true);
        fixture.detectChanges();
        expect(debugElement.nativeElement.classList.contains('border')).toBe(true);
        fixture.componentRef.setInput('border', {
            top: 1,
            end: true,
            color: 'primary',
            start: { color: 'success', width: 2 }
        });
        fixture.detectChanges();
        expect(debugElement.nativeElement.classList.contains('border-top-1')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('border-end')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('border-color-primary')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('border-start-2')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('border-start-success')).toBe(true);
        expect(debugElement.nativeElement.classList.length).toBe(5);
        fixture.componentRef.setInput('border', {});
        fixture.detectChanges();
        expect(debugElement.nativeElement.classList.length).toBe(0);
        fixture.componentRef.setInput('border', 1234n);
        fixture.detectChanges();
        expect(debugElement.nativeElement.classList.length).toBe(0);
    });
});
