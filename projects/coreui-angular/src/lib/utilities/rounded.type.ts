export type Rounded = boolean | RoundedSize | RoundedElement | IRoundedCorner;

export interface IRoundedCorner {
  top?: boolean;
  end?: boolean;
  bottom?: boolean;
  start?: boolean;
  circle?: boolean;
  pill?: boolean;
  size?: RoundedSize;
}

export type RoundedSize = 0 | 1 | 2 | 3 | number;

export type RoundedElement = 'top' | 'end' | 'bottom' | 'start' | 'circle' | 'pill';
