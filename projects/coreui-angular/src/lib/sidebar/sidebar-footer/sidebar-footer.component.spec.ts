import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFooterComponent } from './sidebar-footer.component';

describe('SidebarFooterComponent', () => {
  let component: SidebarFooterComponent;
  let fixture: ComponentFixture<SidebarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarFooterComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('sidebar-footer')).toBe(true);
  });
});
