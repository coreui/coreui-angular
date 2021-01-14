import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppHeaderComponent } from './app-header.component';
import { AsideToggleDirective, SidebarToggleDirective, HtmlAttributesDirective } from '../shared/layout/layout.directive';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ AppHeaderComponent, SidebarToggleDirective, AsideToggleDirective, HtmlAttributesDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
