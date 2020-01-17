import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
export declare class AppBreadcrumbService {
    private router;
    private route;
    breadcrumbs: Observable<Array<any>>;
    private breadcrumbSubject;
    constructor(router: Router, route: ActivatedRoute);
}
