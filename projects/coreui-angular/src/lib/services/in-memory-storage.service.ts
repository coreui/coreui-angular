import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryStorageService implements Storage {
  #storage = new Map<string, string>();

  public setItem(key: string, data: any): void {
    this.#storage.set(key, JSON.stringify(data));
  }

  public getItem(key: string): any {
    return this.#storage.has(key) ? JSON.parse(this.#storage.get(key) ?? 'null') : undefined;
  }

  public removeItem(key: string): void {
    this.#storage.delete(key);
  }

  public clear() {
    this.#storage.clear();
  }

  public get length() {
    return this.#storage.size;
  }

  public key(index: number) {
    return Array.from(this.#storage.keys())[index];
  }
}
