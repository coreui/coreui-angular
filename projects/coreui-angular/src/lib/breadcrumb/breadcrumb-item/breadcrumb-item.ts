import { INavAttributes, INavLinkProps } from '../../coreui.types';

interface IBreadcrumbItem {
  label: string;
  url?: string | any[];
  attributes?: INavAttributes;
  linkProps?: INavLinkProps;
  class?: string;
  queryParams?: { [key: string]: any };
}

export type { INavAttributes, INavLinkProps, IBreadcrumbItem };
