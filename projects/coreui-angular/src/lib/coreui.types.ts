export enum BreakpointInfix {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl'
}

export type BreakpointInfixStrings = keyof typeof BreakpointInfix;

export type Breakpoints = BreakpointInfixStrings | string;

export type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string;

export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | string;

export type ColorsGradient =
  | `${Colors}-gradient`;

export type BackgroundColors = Colors | 'body' | 'white' | 'transparent';

export type Directions = 'down' | 'up' | 'start' | 'end' | '';

export type TextColors =
  | Colors
  | 'body'
  | 'white'
  | 'muted'
  | 'black-50'
  | 'white-50'
  | 'high-emphasis'
  | 'medium-emphasis'
  | 'disabled'
  | 'high-emphasis-inverse'
  | 'medium-emphasis-inverse'
  | 'disabled-inverse';

export type Alignment =
  | 'baseline'
  | 'top'
  | 'middle'
  | 'bottom'
  | 'text-top'
  | 'text-bottom';

export type BadgePositions =
  | 'top-start'
  | 'top-end'
  | 'bottom-end'
  | 'bottom-start'
  | string
  | undefined;

export type Placements =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top-end'
  | 'top'
  | 'top-start'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'left-start'
  | 'left'
  | 'left-end'
  | undefined;

export type Shapes =
  | 'rounded'
  | 'rounded-top'
  | 'rounded-end'
  | 'rounded-bottom'
  | 'rounded-start'
  | 'rounded-circle'
  | 'rounded-pill'
  | 'rounded-0'
  | 'rounded-1'
  | 'rounded-2'
  | 'rounded-3'
  | string;

export type Triggers = 'hover' | 'focus' | 'click';

export type Positions = 'fixed' | 'sticky';

export type InputType =
  | 'button'
  | 'color'
  | 'date'
  | 'datetime'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'checkbox'
  | 'radio';

export interface INavLinkProps {
  queryParams?: { [k: string]: any };
  fragment?: string;
  queryParamsHandling?: 'merge' | 'preserve' | '' | null;
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: { [k: string]: any };
  routerLinkActiveOptions?: { exact: boolean };
  routerLinkActive?: string | string[];
}

export interface INavAttributes {
  [propName: string]: any;
}

export type ButtonType = 'button' | 'submit' | 'reset';
