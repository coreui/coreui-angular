import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SidebarNavLabelComponent } from './sidebar-nav-label.component';
import { SidebarNavHelper } from './sidebar-nav.service';

describe('SidebarNavLabelComponent', () => {
  let component: SidebarNavLabelComponent;
  let fixture: ComponentFixture<SidebarNavLabelComponent>;
  let item: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SidebarNavHelper],
      imports: [SidebarNavLabelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavLabelComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;

    item = {
      name: 'Label Item',
      class: '',
      variant: 'info',
      icon: 'c-icon',
      label: {
        variant: 'info',
        class: ''
      },
      badge: {}
    };
    fixture.componentRef.setInput('item', item);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set correct itemClass', () => {
    const link = fixture.debugElement.query(By.css('a')).nativeElement;

    expect(link.classList.contains('c-nav-label')).toBe(true);
    expect(link.classList.contains('c-active')).toBe(true);
    item.class = 'custom-class';
    fixture.componentRef.setInput('item', { ...item });
    fixture.detectChanges();
    expect(link.classList.contains('custom-class')).toBe(true);
  });

  it('should display label name', () => {
    const label = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(label.textContent).toBe(item.name);
    expect(label.textContent).toBe('Label Item');
  });

  it('should set correct labelIconClass', () => {
    const icon = fixture.debugElement.query(By.css('i')).nativeElement;
    expect(icon.classList.contains('text-info')).toBe(true);
    item.label = { variant: 'success', class: 'custom-icon-class' };
    fixture.componentRef.setInput('item', { ...item });
    fixture.detectChanges();
    expect(icon.classList.contains('text-success')).toBe(true);
    expect(icon.classList.contains('custom-icon-class')).toBe(true);
  });
});
