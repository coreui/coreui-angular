import { Colors } from '../coreui.types';

export type Border = boolean | BorderWidth | BorderColor | IBorderElement | IBorder;

export interface IBorder {
  top?: BorderWidth | BorderColor | IBorderElement | boolean;
  end?: BorderWidth | BorderColor | IBorderElement | boolean;
  bottom?: BorderWidth | BorderColor | IBorderElement | boolean;
  start?: BorderWidth | BorderColor | IBorderElement | boolean;
  color?: BorderColor;
}

export type BorderColor = Colors | 'white';

export type BorderWidth = 0 | 1 | 2 | 3 | 4 | 5 | number ;

export interface IBorderElement {
  color?: BorderColor;
  width?: BorderWidth;
}
