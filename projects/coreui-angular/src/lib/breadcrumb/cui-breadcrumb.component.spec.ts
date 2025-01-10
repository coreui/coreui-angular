import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { CuiBreadcrumbComponent } from './cui-breadcrumb.component';

describe('CuiBreadcrumbComponent', () => {
  let component: CuiBreadcrumbComponent;
  let fixture: ComponentFixture<CuiBreadcrumbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), CuiBreadcrumbComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
