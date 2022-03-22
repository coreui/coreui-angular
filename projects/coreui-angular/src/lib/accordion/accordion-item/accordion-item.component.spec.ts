import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemComponent } from './accordion-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from '../../collapse';
import { AccordionService } from '../accordion.service';
import { AccordionButtonDirective } from '../accordion-button/accordion-button.directive';

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let fixture: ComponentFixture<AccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemComponent, AccordionButtonDirective ],
      providers: [AccordionService],
      imports: [NoopAnimationsModule, CollapseModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
