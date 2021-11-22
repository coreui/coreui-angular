import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHeaderComponent } from './sidebar-header.component';

describe('SidebarHeaderComponent', () => {
  let component: SidebarHeaderComponent;
  let fixture: ComponentFixture<SidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
