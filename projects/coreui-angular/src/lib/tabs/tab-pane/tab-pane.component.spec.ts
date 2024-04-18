import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPaneComponent } from './tab-pane.component';

describe('TabPaneComponent', () => {
  let component: TabPaneComponent;
  let fixture: ComponentFixture<TabPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPaneComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('tab-pane');
    expect(fixture.nativeElement).toHaveClass('fade');
  });
});
