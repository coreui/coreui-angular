import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDividerComponent } from './header-divider.component';

describe('HeaderDividerComponent', () => {
  let component: HeaderDividerComponent;
  let fixture: ComponentFixture<HeaderDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDividerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
