import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { TableActiveDirective } from './table-active.directive';

describe('TableActiveDirective', () => {
  let active: WritableSignal<boolean>;
  let fixture: DirectiveFixture<TableActiveDirective>;

  beforeEach(async () => {
    active = signal(false);
    fixture = TestBed.createDirective(TableActiveDirective, {
      tagName: 'tr',
      bindings: [inputBinding('cTableActive', active)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should add class "table-active" when active is true', async () => {
    active.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList).toContain('table-active');
  });

  it('should not add class "table-active" when active is false', async () => {
    active.set(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList).not.toContain('table-active');
  });
});
