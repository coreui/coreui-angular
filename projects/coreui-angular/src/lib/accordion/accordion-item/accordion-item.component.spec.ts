import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionButtonDirective } from '../accordion-button/accordion-button.directive';
import { AccordionService } from '../accordion.service';
import { AccordionItemComponent } from './accordion-item.component';
import { ComponentRef } from '@angular/core';

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let componentRef: ComponentRef<AccordionItemComponent>;
  let fixture: ComponentFixture<AccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AccordionService],
      imports: [NoopAnimationsModule, AccordionButtonDirective, AccordionItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionItemComponent);
    await fixture.whenStable();
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('accordion-item')).toBe(true);
  });

  it('should toggle item', () => {
    expect(component.visible).toBe(false);
    component.toggleItem();
    expect(component.visible).toBe(true);
    component.toggleItem();
    expect(component.visible).toBe(false);
  });
});
