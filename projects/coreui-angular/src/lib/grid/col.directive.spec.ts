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
    expect(debugElement.nativeElement).toHaveClass('col');
    expect(debugElement.nativeElement).toHaveClass('col-lg-auto');
    expect(debugElement.nativeElement).toHaveClass('col-xl');
    debugElement = fixture.debugElement.query(By.css('#col1'));
    expect(debugElement.nativeElement).toHaveClass('col-6');
    expect(debugElement.nativeElement).toHaveClass('order-1');
    expect(debugElement.nativeElement).toHaveClass('offset-1');
    expect(debugElement.nativeElement).toHaveClass('col-sm-5');
    expect(debugElement.nativeElement).toHaveClass('col-md-4');
    expect(debugElement.nativeElement).toHaveClass('col-lg-3');
    expect(debugElement.nativeElement).toHaveClass('col-xl-2');
    expect(debugElement.nativeElement).toHaveClass('col-xxl-1');
    debugElement = fixture.debugElement.query(By.css('#col2'));
    expect(debugElement.nativeElement).toHaveClass('col');
    expect(debugElement.nativeElement).toHaveClass('offset-md-2');
    expect(debugElement.nativeElement).toHaveClass('order-md-1');
    expect(debugElement.nativeElement).toHaveClass('order-xl-first');
    expect(debugElement.nativeElement).toHaveClass('order-xxl-last');
  });
});
