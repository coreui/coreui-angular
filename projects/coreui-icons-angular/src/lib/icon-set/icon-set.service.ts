import { Injectable } from '@angular/core';

export interface IIconSet {
  [iconName: string]: string[];
}

@Injectable({
  providedIn: 'root'
})
export class IconSetService {

  constructor() {}

  public get iconNames() {
    return this._iconNames;
  };
  private _iconNames: { [key: string]: string } = {};

  get icons(): IIconSet {
    return this._icons;
  }
  set icons(iconSet) {
    for (const iconsKey in iconSet) {
      this._iconNames[iconsKey] = iconsKey;
    }
    this._icons = iconSet;
  }
  private _icons: IIconSet = {};

  public getIcon(name: string): string[] {
    const icon = this.icons[name];
    if (!icon) {
      console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
    }
    return this.icons[name];
  }
}
