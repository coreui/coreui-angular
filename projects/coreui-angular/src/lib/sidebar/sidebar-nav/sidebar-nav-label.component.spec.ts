import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SidebarNavLabelComponent } from './sidebar-nav-label.component';
import { SidebarNavHelper } from './sidebar-nav.service';

describe('SidebarNavLabelComponent', () => {
  let component: SidebarNavLabelComponent;
  let fixture: ComponentFixture<SidebarNavLabelComponent>;
  let item: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [SidebarNavHelper],
      imports: [SidebarNavLabelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavLabelComponent);
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

    expect(link).toHaveClass('c-nav-label');
    expect(link).toHaveClass('c-active');
    item.class = 'custom-class';
    fixture.componentRef.setInput('item', { ...item });
    fixture.detectChanges();
    expect(link).toHaveClass('custom-class');
  });

  it('should display label name', () => {
    const label = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(label.textContent).toBe(item.name);
    expect(label.textContent).toBe('Label Item');
  });

  it('should set correct labelIconClass', () => {
    const icon = fixture.debugElement.query(By.css('i')).nativeElement;
    expect(icon).toHaveClass('text-info');
    item.label = { variant: 'success', class: 'custom-icon-class' };
    fixture.componentRef.setInput('item', { ...item });
    fixture.detectChanges();
    expect(icon).toHaveClass('text-success');
    expect(icon).toHaveClass('custom-icon-class');
  });
});
