import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/index';
export declare class AppBreadcrumbService {
    private router;
    private route;
    breadcrumbs: Observable<Array<Object>>;
    private _breadcrumbs;
    constructor(router: Router, route: ActivatedRoute);
}
