import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAsideComponent } from './app-aside.component';

describe('AppAsideComponent', () => {
  let component: AppAsideComponent;
  let fixture: ComponentFixture<AppAsideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
