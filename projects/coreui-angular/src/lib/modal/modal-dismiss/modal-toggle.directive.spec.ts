import { ModalToggleDirective } from './modal-toggle.directive';
import { ModalService } from '../modal.service';

describe('ModalDismissDirective', () => {
  it('should create an instance', () => {
    const modalService = new ModalService()
    const directive = new ModalToggleDirective(modalService);
    expect(directive).toBeTruthy();
  });
});
