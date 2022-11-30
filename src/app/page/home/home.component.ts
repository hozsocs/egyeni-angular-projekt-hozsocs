import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { GalleryService } from 'src/app/service/gallery.service';

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

  // phrase$: BehaviorSubject<string> = this.config.searchPhrase$;

  @Output() filterPeriodValue: string = '';
  truePeriodListSet = new Set();
  galleryFirstPage: GalleryItem[] = [];
  p: number = 1;

  constructor(
    //Service-k injektálása
    private config: ConfigService,
    private galleryService: GalleryService,
    private router: Router
  ) {}

  //Egyszer meg kell hívni, hogy lejöjjön az adat
  ngOnInit(): void {
    this.galleryService.getAll();
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

  onClick(period: string): void {
    this.filterPeriodValue = period;
    this.router.navigateByUrl(`/gallery/${period}`);
  }
}
