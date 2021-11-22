import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToolbarComponent } from './button-toolbar.component';

describe('ButtonToolbarComponent', () => {
  let component: ButtonToolbarComponent;
  let fixture: ComponentFixture<ButtonToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
