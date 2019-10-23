import { AppSidebarService } from './app-sidebar.service';
export declare class AppSidebarMinimizerComponent {
    private sidebarService;
    role: string;
    _minimizer: boolean;
    toggleOpen($event: any): void;
    constructor(sidebarService: AppSidebarService);
}
