import { TestBed } from '@angular/core/testing';

import { IToasterAction, ToasterService } from './toaster.service';
import { ToastComponent } from '../toast/toast.component';

describe('ToasterService', () => {
  let service: ToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit on setState and not on subscribe', () => {
    const states: IToasterAction[] = [];
    service.toasterState$.subscribe((state) => states.push(state));

    service.setState({ show: false, placement: 'top-end' });

    expect(states).toEqual([{ show: false, placement: 'top-end' }]);
  });

  it('should not hand a closed and destroyed toast to a later subscriber', async () => {
    const fixture = TestBed.createComponent(ToastComponent);
    const toast = fixture.componentInstance;
    fixture.componentRef.setInput('visible', true);
    await fixture.whenStable();
    toast.onClose();
    fixture.destroy();

    const toasts: (ToastComponent | undefined)[] = [];
    service.toasterState$.subscribe((state) => toasts.push(state.toast));

    expect(toasts).not.toContain(toast);
  });
});
