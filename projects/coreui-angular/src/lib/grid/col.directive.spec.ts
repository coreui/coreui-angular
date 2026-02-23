import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColDirective, ColOffsetType, ColOrderType } from './col.directive';

@Component({
    imports: [ColDirective],
    template: `
    <div id="col0" cCol lg="auto" [xl]="true"></div>
    <div id="col1" cCol [order]="1" [offset]="1" xs="6" sm="5" md="4" lg="3" xl="2" xxl="1"></div>
    <div id="col2" [cCol]="col" [order]="order" [offset]="offset"></div>
  `
})
export class TestComponent {
    col!: number;
    offset: ColOffsetType = { md: 2, xs: 1 };
    order: ColOrderType = { xl: 'first', xxl: 'last', md: 1, xs: 1 };
}

describe('ColDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        TestBed.runInInjectionContext(() => {
            const directive = new ColDirective();
            expect(directive).toBeTruthy();
        });
    });

    it('should have css class', () => {
        debugElement = fixture.debugElement.query(By.css('#col0'));
        expect(debugElement.nativeElement.classList.contains('col')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('col-lg-auto')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('col-xl')).toBe(true);
        debugElement = fixture.debugElement.query(By.css('#col1'));
        expect(debugElement.nativeElement.classList.contains('col-6')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('order-1')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('offset-1')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('col-sm-5')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('col-md-4')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('col-lg-3')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('col-xl-2')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('col-xxl-1')).toBe(true);
        debugElement = fixture.debugElement.query(By.css('#col2'));
        expect(debugElement.nativeElement.classList.contains('col')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('offset-md-2')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('order-md-1')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('order-xl-first')).toBe(true);
        expect(debugElement.nativeElement.classList.contains('order-xxl-last')).toBe(true);
    });
});
