import { Breakpoints, Colors } from '../coreui.types';

export interface ITable {
  /**
   * Set the vertical alignment.
   * @returns string
   * @values 'bottom' | 'middle' | 'top'
   */
  align?: 'bottom' | 'middle' | 'top';
  /**
   * Sets the border color of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  borderColor?: Colors;
  /**
   * Add borders on all sides of the table and cells.
   * @returns boolean
   */
  bordered?: boolean | string;
  /**
   * Remove borders on all sides of the table and cells.
   * @returns boolean
   */
  borderless?: boolean | string;
  /**
   * Put the `<caption>` on the top of the table.
   * @values 'top'
   */
  caption?: 'top';
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  color?: Colors;
  /**
   * Enable a hover state on table rows within table body.
   * @returns boolean
   */
  hover?: boolean | string;
  /**
   * Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
   * @returns boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
   */
  responsive?: boolean | Omit<Breakpoints, 'xs'>;
  /**
   * Make table more compact by cutting all cell `padding` in half.
   * @returns boolean
   */
  small?: boolean | string;
  /**
   * Add zebra-striping to any table row within the table body`.
   * @returns boolean
   */
  striped?: boolean | string;

  attributes?: Partial<HTMLTableElement>;
}

export interface ITableElementProps {
  /**
   * Set the vertical alignment.
   @returns 'bottom' | 'middle' | 'top'
   */
  align?: ('bottom' | 'middle' | 'top');
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  color?: Colors;

  /** @deprecated */
  _attributes?: Partial<HTMLTableElement>;
}

export interface ITableRowCellProps extends ITableElementProps {
  /**
   * Highlight a table row or cell
   @returns boolean
   */
  active?: boolean;

  /** @deprecated */
  _attributes?: Partial<HTMLTableCellElement> | Partial<HTMLTableRowElement>;
}
