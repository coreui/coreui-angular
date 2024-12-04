import { TestBed } from '@angular/core/testing';
import { SidebarService } from '../sidebar.service';
import { SidebarToggleDirective } from './sidebar-toggle.directive';

describe('SidebarToggleDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SidebarService]
    }).compileComponents();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new SidebarToggleDirective();
      expect(directive).toBeTruthy();
    });
  });
});
