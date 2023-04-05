import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarNavTitleComponent } from './sidebar-nav-title.component';

describe('SidebarNavTitleComponent', () => {
  let component: SidebarNavTitleComponent;
  let fixture: ComponentFixture<SidebarNavTitleComponent>;
  let item: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SidebarNavTitleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavTitleComponent);
    component = fixture.componentInstance;

    item = {
      title: true,
      name: 'Theme'
    };
    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
