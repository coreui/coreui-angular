import { Injectable } from '@angular/core';

export interface IIconSet {
  [iconName: string]: string[];
}

@Injectable({
  providedIn: 'root'
})
export class IconSetService {
  public get iconNames() {
    return this.#iconNames;
  }

  #iconNames: Record<string, string> = {};

  get icons(): IIconSet {
    return this.#icons;
  }

  set icons(iconSet) {
    for (const iconsKey in iconSet) {
      this.#iconNames[iconsKey] = iconsKey;
    }
    this.#icons = iconSet;
  }

  #icons: IIconSet = {};

  public getIcon(name: string): string[] {
    const icon = this.icons[name];
    if (!icon) {
      console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
    }
    return this.icons[name];
  }
}
