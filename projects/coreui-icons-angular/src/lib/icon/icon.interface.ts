export interface IIcon {
  content?: string | string[] | any[];
  customClasses?: string | string[] | Set<string> | { [klass: string]: any };
  height?: string;
  name?: string;
  pointerEvents?: string;
  size?: IconSize;
  title?: string;
  viewBox?: string;
  width?: string;
  xmlns?: string;
}

export type IconSize =
  'custom'
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
