import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarNavLabelComponent } from './sidebar-nav-label.component';
import { SidebarNavHelper } from './sidebar-nav.service';
// import {LayoutModule} from '../../shared/layout/index.ts_';

describe('SidebarNavLabelComponent', () => {
  let component: SidebarNavLabelComponent;
  let fixture: ComponentFixture<SidebarNavLabelComponent>;
  let item: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [SidebarNavHelper],
      imports: [SidebarNavLabelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavLabelComponent);
    component = fixture.componentInstance;

    item = {
      class: '',
      variant: 'info'
    };
    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
