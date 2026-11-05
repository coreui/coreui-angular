import { IsActiveMatchOptions, Params } from '@angular/router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type INavAttributes = Record<string, any>;

export interface INavWrapper {
  attributes: INavAttributes;
  element: string;
}

export interface INavBadge {
  text: string;
  variant: string;
  class?: string;
}

export interface INavLabel {
  class?: string;
  variant: string;
}

export interface INavLinkProps {
  queryParams?: Params;
  fragment?: string;
  queryParamsHandling?: 'merge' | 'preserve' | '';
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: Record<string, unknown>;
  routerLinkActiveOptions?: { exact: boolean } | IsActiveMatchOptions;
  routerLinkActive?: string | string[];
}

export interface INavData {
  name?: string;
  url?: string | unknown[];
  href?: string;
  icon?: string;
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
