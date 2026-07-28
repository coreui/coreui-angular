import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterComponent } from './toaster.component';
import { ToasterHostDirective } from './toaster-host.directive';

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToasterComponent, ToasterHostDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(ToasterComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('toaster')).toBe(true);
    expect(fixture.nativeElement.classList.contains('toast-container')).toBe(true);
  });
});
