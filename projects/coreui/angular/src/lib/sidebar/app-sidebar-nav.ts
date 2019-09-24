export interface INavAttributes {
  [propName: string]: any;
}

export interface INavWrapper {
  attributes: INavAttributes;
  element: string;
}

export interface INavBadge {
  text: string;
  variant: string;
}

export interface INavLabel {
  class?: string;
  variant: string;
}

export interface INavData {
  name?: string;
  url?: string;
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
}
