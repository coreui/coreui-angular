export interface ISidebarAction {
    minimize?: boolean | 'toggle';
}
export declare class AppSidebarService {
    private events;
    events$: import("rxjs").Observable<ISidebarAction>;
    constructor();
    toggle(action: ISidebarAction): void;
}
