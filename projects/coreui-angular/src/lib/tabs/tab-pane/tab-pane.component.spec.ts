import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPaneComponent } from './tab-pane.component';

describe('TabPaneComponent', () => {
  let component: TabPaneComponent;
  let fixture: ComponentFixture<TabPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPaneComponent ]
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
});
