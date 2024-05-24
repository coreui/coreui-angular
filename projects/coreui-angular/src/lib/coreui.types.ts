import { IsActiveMatchOptions } from '@angular/router';

export type NgCssClass = string | string[] | Set<string> | { [klass: string]: any };

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
  | 'primary-gradient'
  | 'secondary-gradient'
  | 'success-gradient'
  | 'danger-gradient'
  | 'warning-gradient'
  | 'info-gradient'
  | 'dark-gradient'
  | 'light-gradient'
  | string;

// export type ColorsGradient =
//   | Colors
//   | `${Colors}-gradient`;

export type BackgroundColors = Colors | 'body' | 'white' | 'transparent';

export type Directions = 'down' | 'up' | 'start' | 'end' | '';

export type TextColors =
  | Colors
  | 'primary-emphasis'
  | 'secondary-emphasis'
  | 'success-emphasis'
  | 'danger-emphasis'
  | 'warning-emphasis'
  | 'info-emphasis'
  | 'light-emphasis'
  | 'body'
  | 'body-emphasis'
  | 'body-secondary'
  | 'body-tertiary'
  | 'black'
  | 'black-50'
  | 'white'
  | 'white-50'
  | string;

export type Alignment = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';

export type BadgePositions = 'top-start' | 'top-end' | 'bottom-end' | 'bottom-start' | string | undefined;

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

export type Triggers = 'hover' | 'focus' | 'click' | 'focusin';

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
  routerLinkActiveOptions?: { exact: boolean } | IsActiveMatchOptions;
  routerLinkActive?: string | string[];
  ariaCurrentWhenActive?: 'page' | 'step' | 'location' | 'date' | 'time' | true | false;
}

export interface INavAttributes {
  [propName: string]: any;
}

export type ButtonType = 'button' | 'submit' | 'reset';
