import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItem } from 'src/app/model/news-item';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit{
  @Input() news: NewsItem = new NewsItem();
  @Output() onSelect = new EventEmitter<NewsItem>();
  @Output() onDeleteSelect = new EventEmitter<NewsItem>();

  constructor(
    //Service-k injektálása
    private config: ConfigService,
    private NewsService: NewsService
  ) {}
  ngOnInit(): void {

  }
  /* raiseEdit(): void {
    this.onSelect.emit(this.news);
  }

  raiseDelete(): void {
    this.onDeleteSelect.emit(this.news);
  } */
}
