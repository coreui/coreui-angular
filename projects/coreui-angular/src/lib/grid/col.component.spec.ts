import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColComponent } from './col.component';

describe('ColComponent', () => {
  let component: ColComponent;
  let fixture: ComponentFixture<ColComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
