// ez itt egy általános szerviz sablon, a további szervizek ennek a kiterjesztései lesznek

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GalleryItem } from '../model/gallery-item';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends { [x: string]: any }> {
  //így is lehet a servicet injectálni már!!
  http: HttpClient = inject(HttpClient);

  //Az environment lapon beállított alap adatbázis útvonal. "/" jel van a végén!!
  apiUrl: string = environment.apiUrl;

  //Adatbázis útvonal végződése, más-más lehet az egyes osztályokban az adat típusától függően
  entityName: string = '';

  // Egyszer lekéri az adatokat és amíg nem változik innen mindíg elérhetőek lesznek! Takarékos!
  //**A teljes lista ebben lesz */
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  //**Az aktuális rekord ebben lesz */
  selected$: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(null);

  constructor() {}

  //Kiszervezett metódus, amely megnézi, hogy a kiválasztott rekord szerepel-e a letöltött listában.
  //**Ha igen, akkor az id-t adja vissza, ha nem, akkor -1-t. */
  getCachedItemIndexByID(id: number): number {
    id = Number(id);
    const currentList = this.list$.getValue();
    return currentList.findIndex((item) => item['id'] === id);
  }

  // Minden adat lekérése a szerverről
  getAll(): void {
    this.http
      .get<T[]>(`${this.apiUrl}${this.entityName}`)
      .subscribe((dataList) => this.list$.next(dataList));
  }
  // Egy adat lekérése: Ha már szerepel a listában akkor onnan, ha nem, akkor a szerverről
  get(id: number): void {
    const itemIndex = this.getCachedItemIndexByID(id);
    if (itemIndex > -1) {
      this.selected$.next(this.list$.getValue()[itemIndex]);
    } else {
      this.http
        .get<T>(`${this.apiUrl}${this.entityName}/${id}`)
        .subscribe((data) => this.selected$.next(data));
    }
  }

  // Adat törlése:
  delete(id: number): void {
    this.http.delete(`${this.apiUrl}${this.entityName}/${id}`).subscribe(() => {
      const itemIndex = this.getCachedItemIndexByID(id);
      if (itemIndex > -1) {
        const currentList = this.list$.getValue();
        currentList.splice(itemIndex, 1);
        this.list$.next(currentList);
      }
    });
  }

  // Új adatbáziselem létrehozása:
  create(id: number): void {
    this.http
      .post(`${this.apiUrl}${this.entityName}/${id}`, this.selected$)
      .subscribe(() => {
        const itemIndex = this.getCachedItemIndexByID(id);
        if (itemIndex > -1) {
          const currentList = this.list$.getValue();
          currentList.splice(itemIndex, 1);
          this.list$.next(currentList);
        }
      });
  }
}
