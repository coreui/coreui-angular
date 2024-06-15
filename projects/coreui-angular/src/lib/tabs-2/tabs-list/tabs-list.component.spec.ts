import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsListComponent } from './tabs-list.component';
import { TabsService } from '../tabs.service';

describe('TabsListComponent', () => {
  let component: TabsListComponent;
  let fixture: ComponentFixture<TabsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsListComponent],
      providers: [TabsService]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
