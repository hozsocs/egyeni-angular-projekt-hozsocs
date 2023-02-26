import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';
import { NewsItem } from 'src/app/model/news-item';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { GalleryService } from 'src/app/service/gallery.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //Táblázat adatok lekérdezése a config service-ből
  columns: ITableColumn[] = this.config.galleryTableColumns;

  //Adatbázis adatok: galleryService --> list$
  galleryList$: Observable<GalleryItem[]> = this.galleryService.getAll();
  news1: NewsItem = new NewsItem();
  news2: NewsItem = new NewsItem();
  newsindex: number = 3;
  newsList$: Observable<NewsItem[]> = this.newsService.getAll()
  //sortedNewsList= this.newsList$.subscribe();;

  // phrase$: BehaviorSubject<string> = this.config.searchPhrase$;

  @Output() filterPeriodValue: string = '';
  truePeriodListSet = new Set();
  galleryFirstPage: GalleryItem[] = [];
  p: number = 1;

  constructor(
    //Service-k injektálása
    private config: ConfigService,
    private galleryService: GalleryService,
    private newsService: NewsService,
    private router: Router
  ) {}

  //Egyszer meg kell hívni, hogy lejöjjön az adat
  ngOnInit(): void {
    this.periodListGenerator();

  }

  periodListGenerator(): void {
    this.galleryList$.subscribe((listObject) => {
      const gallerycopy = listObject;
      gallerycopy.forEach((item) => {
        if (!item.period) '';
        else this.truePeriodListSet.add(item.period);
      });

      this.truePeriodListSet.forEach((period) => {
        const pageitem = gallerycopy.find(
          (gallery) => gallery.period === period
        );
        if (!pageitem) '';
        else this.galleryFirstPage.push(pageitem);
      });
    });
  }

  /* newsGenerator(minIndex: number): void {
    this.newsList$.subscribe((listObject) => {
      this.sortedNewsList = {...listObject}});


      this.sortedNewsList.sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        })
        .forEach((item, index) => {
          if (index === minIndex) this.news1 = item;

          if (index == minIndex + 1) this.news2 = item;
          ;
        });
    }; */


  onClick(period: string): void {
    this.filterPeriodValue = period;
    this.router.navigateByUrl(`/gallery/${period}`);
  }

  onMoveLeftClick(): void {

    this.newsList$.subscribe(object =>{
      if (this.newsindex>1) this.newsindex-=1
})

  }

  onMoveRightClick(): void {

    this.newsList$.subscribe(object =>{
      if (object.length>this.newsindex+1) this.newsindex+=1
})
    }
}
