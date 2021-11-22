import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormCheckComponent } from './form-check.component';
import { Renderer2 } from '@angular/core';

describe('FormCheckComponent', () => {
  let component: FormCheckComponent;
  let fixture: ComponentFixture<FormCheckComponent>;
  let renderer: Renderer2;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCheckComponent ],
      providers: [Renderer2]
    })
    .compileComponents();
  }));


  // todo
  beforeEach(() => {
    // fixture = TestBed.createComponent(FormCheckComponent);
    // renderer =  fixture.debugElement.injector.get(Renderer2);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
