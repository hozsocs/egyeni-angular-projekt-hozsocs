import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsItem } from '../model/news-item';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  //felül kell írni a BaseService változóját
  entityName: string = 'news';
  apiUrl: string = environment.apiUrl;
  http: HttpClient = inject(HttpClient);
  constructor() {}

  getAll(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<NewsItem> {
    return this.http.get<NewsItem>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(news: NewsItem): Observable<NewsItem> {
    return this.http.post<NewsItem>(`${this.apiUrl}${this.entityName}`, news);
  }

  update(news: NewsItem): Observable<NewsItem> {
    return this.http.patch<NewsItem>(
      `${this.apiUrl}${this.entityName}/${news.id}`,
      news
    );
  }
  delete(news: NewsItem): Observable<NewsItem> {
    return this.http.delete<NewsItem>(
      `${this.apiUrl}${this.entityName}/${news.id}`
    );
  }
}
