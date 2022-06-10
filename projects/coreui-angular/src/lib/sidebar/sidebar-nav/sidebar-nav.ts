import { IsActiveMatchOptions } from '@angular/router';

export interface INavAttributes {
  [propName: string]: any;
}

export interface INavWrapper {
  attributes: INavAttributes;
  element: string;
}

export interface INavBadge {
  text: string;
  color: string;
  size?: string;
  class?: string;
}

export interface INavLabel {
  class?: string;
  variant: string;
}

export interface INavLinkProps {
  queryParams?: { [k: string]: any };
  fragment?: string;
  queryParamsHandling?: 'merge' | 'preserve' | '' | null;
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: { [k: string]: any };
  routerLinkActiveOptions?: { exact: boolean } | IsActiveMatchOptions;
  routerLinkActive?: string | string[];
  ariaCurrentWhenActive?: 'page' | 'step' | 'location' | 'date' | 'time' | true | false;
}

export interface INavData {
  name?: string;
  url?: string | any[];
  href?: string;
  icon?: string;
  iconComponent?: any;
  badge?: INavBadge;
  title?: boolean;
  children?: INavData[];
  variant?: string;
  attributes?: INavAttributes;
  divider?: boolean;
  class?: string;
  label?: INavLabel;
  wrapper?: INavWrapper;
  linkProps?: INavLinkProps;
}
