import { ToastCloseDirective } from './toast-close.directive';
import { TestBed } from '@angular/core/testing';
import { ToasterService } from './toaster/toaster.service';
import { ToastModule } from './toast.module';

describe('ToastCloseDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ToasterService],
      imports: [ToastModule]
    })
      .compileComponents();
  });

  it('should create an instance', () => {
    const service = new ToasterService();
    const directive = new ToastCloseDirective(service);
    expect(directive).toBeTruthy();
  });
});
