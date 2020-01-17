import { EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AppSidebarService } from './app-sidebar.service';
export declare class AppSidebarComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private sidebarService;
    private subscriptionEvents;
    private _minimized;
    compact: boolean;
    display: any;
    fixed: boolean;
    offCanvas: boolean;
    minimized: boolean;
    /**
     * Emits whenever the minimized state of the sidebar changes.
     * Primarily used to facilitate two-way binding.
     */
    minimizedChange: EventEmitter<boolean>;
    sidebarClass: boolean;
    constructor(document: any, renderer: Renderer2, sidebarService: AppSidebarService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isCompact(compact?: boolean): void;
    isFixed(fixed?: boolean): void;
    toggleMinimized(): void;
    isOffCanvas(offCanvas?: boolean): void;
    displayBreakpoint(display?: any): void;
    private _updateMinimized;
}
