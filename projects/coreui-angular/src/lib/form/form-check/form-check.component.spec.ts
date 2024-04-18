import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormCheckComponent } from './form-check.component';
import { Renderer2 } from '@angular/core';

describe('FormCheckComponent', () => {
  let component: FormCheckComponent;
  let fixture: ComponentFixture<FormCheckComponent>;
  let renderer: Renderer2;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormCheckComponent],
      providers: [Renderer2]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCheckComponent);
    renderer = fixture.debugElement.injector.get(Renderer2);
    component = fixture.componentInstance;
    component.switch = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('form-switch');
  });

});
