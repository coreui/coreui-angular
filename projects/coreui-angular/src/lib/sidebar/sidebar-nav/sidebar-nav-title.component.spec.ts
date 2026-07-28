import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavTitleComponent } from './sidebar-nav-title.component';

describe('SidebarNavTitleComponent', () => {
  let component: SidebarNavTitleComponent;
  let fixture: ComponentFixture<SidebarNavTitleComponent>;
  let item: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavTitleComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;

    item = {
      title: true,
      name: 'Theme'
    };
    fixture.componentRef.setInput('item', item);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
