import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
export declare class AppBreadcrumbService {
    private router;
    private route;
    breadcrumbs: Array<Object>;
    constructor(router: Router, route: ActivatedRoute);
}
