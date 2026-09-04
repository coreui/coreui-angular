import { Injectable, signal } from '@angular/core';

@Injectable()
export class NavGroupService {
  /**
   * Id of the open group at this level, `undefined` when none is open.
   */
  readonly activeId = signal<string | undefined>(undefined);

  /**
   * Whether an active nav link opens the branch it sits in. Inherited by nested levels.
   */
  readonly openOnActive = signal(true);

  /**
   * Opens the level owner within its own parent and cascades up to the root.
   * Replaced by the owning `c-nav-group`; stays a no-op for the root level.
   */
  openBranch: () => void = () => undefined;

  setActiveId(id: string | undefined): void {
    this.activeId.set(id);
  }
}
