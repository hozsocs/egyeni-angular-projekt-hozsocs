import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GalleryItem } from '../model/gallery-item';

@Injectable({
  providedIn: 'root',
})

//A BaseService kiterjesztése
export class GalleryService {
  //felül kell írni a BaseService változóját
  entityName: string = '';
  apiUrl: string = environment.apiUrl;
  http: HttpClient = inject(HttpClient);

  constructor() {}

  getAll(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<GalleryItem> {
    return this.http.get<GalleryItem>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(gallery: GalleryItem): Observable<GalleryItem> {
    return this.http.post<GalleryItem>(
      `${this.apiUrl}${this.entityName}`,
      gallery
    );
  }

  update(gallery: GalleryItem): Observable<GalleryItem> {
    return this.http.patch<GalleryItem>(
      `${this.apiUrl}${this.entityName}/${gallery.id}`,
      gallery
    );
  }
  delete(gallery: GalleryItem): Observable<GalleryItem> {
    return this.http.delete<GalleryItem>(
      `${this.apiUrl}${this.entityName}/${gallery.id}`
    );
  }
}
