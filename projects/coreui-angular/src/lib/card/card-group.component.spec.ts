import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardGroupComponent } from './card-group.component';

describe('CardGroupComponent', () => {
  let component: CardGroupComponent;
  let fixture: ComponentFixture<CardGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
