import { InputSignal, InputSignalWithTransform } from '@angular/core';

export interface IIcon {
  content?: InputSignal<string | string[] | any[] | undefined>;
  customClasses?: InputSignal<NgCssClass | undefined>;
  height?: InputSignal<string | undefined>;
  name?: InputSignalWithTransform<string, string>;
  pointerEvents?: InputSignal<IPointerEvents>;
  size?: InputSignal<IconSize>;
  title?: InputSignal<string | undefined>;
  viewBoxInput?: InputSignal<string | undefined>;
  width: InputSignal<string | undefined>;
  xmlns?: InputSignal<string>;
}

export type IconSize =
  | 'custom'
  | 'custom-size'
  | 'sm'
  | 'lg'
  | 'xl'
  | 'xxl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | string;

export type IPointerEvents =
  | 'auto'
  | 'bounding-box'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'none';

export type NgCssClass = string | string[] | Set<string> | { [klass: string]: any };
