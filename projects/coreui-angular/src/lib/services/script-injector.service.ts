import { DOCUMENT } from '@angular/common';
import { inject, Injectable, Renderer2 } from '@angular/core';

export type ReferrerPolicy =
  | ''
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url';

export interface IScriptAttributes {
  async?: boolean;
  blocking?: 'render';
  crossorigin?: 'anonymous' | 'use-credentials';
  defer?: boolean;
  fetchpriority?: 'auto' | 'high' | 'low';
  importmap?: string;
  integrity?: string;
  nomodule?: boolean;
  nonce?: string;
  referrerpolicy?: ReferrerPolicy;
  src: string;
  type?: string;
}

export interface IScriptConfig {
  attributes?: IScriptAttributes;
  loaded?: boolean;
  elementName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScriptInjectorService {
  document: Document = inject(DOCUMENT);
  renderer: Renderer2 = inject(Renderer2);

  #scriptStore = new Map<string, IScriptConfig>();

  public injectScript(src: string, scriptConfig: IScriptConfig = { elementName: 'head' }) {
    if (this.#scriptStore.has(src) && this.#scriptStore.get(src)?.loaded) {
      return;
    }
    const scriptAttributes: IScriptAttributes = { ...scriptConfig?.attributes, src };
    this.loadScript(src, (scriptConfig = { ...scriptConfig, attributes: scriptAttributes })).then();
  }

  loadScript(src: string, scriptConfig: IScriptConfig) {
    return new Promise((resolve, reject) => {
      const scriptElement = this.renderer.createElement('script');
      this.renderer.setAttribute(scriptElement, 'type', 'text/javascript');
      this.renderer.setAttribute(scriptElement, 'src', src);
      scriptElement.onload = () => {
        this.#scriptStore.set(src, { ...scriptConfig, loaded: true });
        resolve({ src: src, loaded: true });
      };
      scriptElement.onerror = (error: any) => reject({ src: src, loaded: false, error });
      this.renderer.appendChild(this.document.querySelector(scriptConfig.elementName ?? 'head'), scriptElement);
    });
  }
}
