import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPaneComponent } from './tab-pane.component';

describe('TabPaneComponent', () => {
  let component: TabPaneComponent;
  let fixture: ComponentFixture<TabPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPaneComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPaneComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('tab-pane')).toBe(true);
    expect(fixture.nativeElement.classList.contains('fade')).toBe(true);
  });
});
