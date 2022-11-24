import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GalleryItem } from '../model/gallery-item';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  apiUrl: string = environment.apiUrl;

  entityName: string = '';

  constructor(private http: HttpClient) {}

  getAll(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<GalleryItem> {
    return this.http.get<GalleryItem>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(drug: GalleryItem): Observable<GalleryItem> {
    return this.http.post<GalleryItem>(
      `${this.apiUrl}${this.entityName}`,
      drug
    );
  }

  update(drug: GalleryItem): Observable<GalleryItem> {
    return this.http.patch<GalleryItem>(
      `${this.apiUrl}${this.entityName}/${drug.id}`,
      drug
    );
  }
  delete(drug: GalleryItem): Observable<GalleryItem> {
    return this.http.delete<GalleryItem>(
      `${this.apiUrl}${this.entityName}/${drug.id}`
    );
  }
}
