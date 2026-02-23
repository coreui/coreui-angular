import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTextComponent } from './header-text.component';

describe('HeaderTextComponent', () => {
  let component: HeaderTextComponent;
  let fixture: ComponentFixture<HeaderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderTextComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('header-text')).toBe(true);
  });
});
