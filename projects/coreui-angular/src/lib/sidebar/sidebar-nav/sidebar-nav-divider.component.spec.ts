import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavDividerComponent } from './sidebar-nav-divider.component';

describe('SidebarNavDividerComponent', () => {
  let component: SidebarNavDividerComponent;
  let fixture: ComponentFixture<SidebarNavDividerComponent>;
  let item: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavDividerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavDividerComponent);
    await fixture.whenStable();

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
