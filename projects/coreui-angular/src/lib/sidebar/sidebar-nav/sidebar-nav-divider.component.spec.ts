import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarNavDividerComponent } from './sidebar-nav-divider.component';

describe('SidebarNavDividerComponent', () => {
  let component: SidebarNavDividerComponent;
  let fixture: ComponentFixture<SidebarNavDividerComponent>;
  let item: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SidebarNavDividerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavDividerComponent);
    component = fixture.componentInstance;

    item = {
      divider: true
    };
    fixture.componentRef.setInput('item', item);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
