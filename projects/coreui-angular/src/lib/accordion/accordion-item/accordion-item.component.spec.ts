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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('accordion-item');
  });

  it('should toggle item', () => {
    expect(component.visible).toBeFalse();
    component.toggleItem();
    expect(component.visible).toBeTrue();
    component.toggleItem();
    expect(component.visible).toBeFalse();
  });
});
