import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { ComponentRef } from '@angular/core';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let componentRef: ComponentRef<ContainerComponent>;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('container')).toBe(true);
    expect(fixture.nativeElement.classList.contains('container-fluid')).toBe(false);
    expect(fixture.nativeElement.classList.contains('container-xl')).toBe(false);
    componentRef.setInput('fluid', true);
    componentRef.setInput('breakpoint', 'xl');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('container-xl')).toBe(true);
  });
});
