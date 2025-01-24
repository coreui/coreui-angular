import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { ComponentRef } from '@angular/core';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let componentRef: ComponentRef<ContainerComponent>;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('container');
    expect(fixture.nativeElement).not.toHaveClass('container-fluid');
    expect(fixture.nativeElement).not.toHaveClass('container-xl');
    componentRef.setInput('fluid', true);
    componentRef.setInput('breakpoint', 'xl');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('container-xl');
  });
});
