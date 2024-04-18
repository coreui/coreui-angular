import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToasterComponent } from './toaster.component';
import { ToasterHostDirective } from './toaster-host.directive';

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ToasterComponent, ToasterHostDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('toaster');
    expect(fixture.nativeElement).toHaveClass('toast-container');
  });
});
