import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('sidebar-fixed')).toBe(true);
  });

  it('should clear the backdrop when a visible mobile sidebar is destroyed', () => {
    component.sidebarState = { mobile: true, visible: true };
    fixture.detectChanges();
    expect(document.querySelector('.sidebar-backdrop')).not.toBeNull();

    fixture.destroy();

    expect(document.querySelector('.sidebar-backdrop')).toBeNull();
  });
});
