import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TabContentComponent } from './tab-content/tab-content.component';

export interface ITabContentState {
  activeIdx: number,
  tabContent: TabContentComponent
}

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private activeTabPaneIdx = new Subject<ITabContentState>();
  activeTabPaneIdx$ = this.activeTabPaneIdx.asObservable();

  constructor() { }

  setActiveTabIdx(tabContentState: ITabContentState) {
    this.activeTabPaneIdx.next(tabContentState);
  }
}
