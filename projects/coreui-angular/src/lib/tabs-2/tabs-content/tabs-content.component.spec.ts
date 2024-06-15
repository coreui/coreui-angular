import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsContentComponent } from './tabs-content.component';

describe('TabsContentComponent', () => {
  let component: TabsContentComponent;
  let fixture: ComponentFixture<TabsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
