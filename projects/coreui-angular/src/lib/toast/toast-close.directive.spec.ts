import { TestBed } from '@angular/core/testing';
import { ToastCloseDirective } from './toast-close.directive';
import { ToasterService } from './toaster/toaster.service';
import { replay } from '../../testing/replayed-event';

describe('ToastCloseDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(ToastCloseDirective, { tagName: 'button' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should close the toast on click', () => {
    const fixture = TestBed.createDirective(ToastCloseDirective, { tagName: 'button' });
    const setState = vi.spyOn(TestBed.inject(ToasterService), 'setState');
    const event = new MouseEvent('click', { cancelable: true });
    fixture.nativeElement.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(setState).toHaveBeenCalledWith({ show: false, toast: undefined });
  });

  it('should ignore a click replayed after hydration', () => {
    const fixture = TestBed.createDirective(ToastCloseDirective, { tagName: 'button' });
    const setState = vi.spyOn(TestBed.inject(ToasterService), 'setState');
    replay(fixture.nativeElement, new MouseEvent('click', { bubbles: true, cancelable: true }));
    expect(setState).not.toHaveBeenCalled();
  });
});
