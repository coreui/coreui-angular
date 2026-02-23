import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let elementRef: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.css('ul'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(elementRef.nativeElement.classList.contains('pagination')).toBe(true);
  });
});
