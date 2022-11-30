import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';
import { GalleryService } from 'src/app/service/gallery.service';
import { Injectable } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  //Táblázat adatok lekérdezése a config service-ből
  columns: ITableColumn[] = this.config.galleryTableColumns;

  //Adatbázis adatok: galleryService --> list$
  galleryList$: Observable<GalleryItem[]> = this.galleryService.getAll();

  filterPeriodValue: string = '';

  phrase$: BehaviorSubject<string> = this.config.searchPhrase$;

  currentPage: number = 1;
  @Input() pageSize: number = 10;
  truePeriodListSet = new Set();
  p: number = 1;

  colums$: any = [];
  sortColumnName: string = 'period';

  constructor(
    //Service-k injektálása
    private config: ConfigService,
    private galleryService: GalleryService,
    private ar: ActivatedRoute,
    private router: Router
  ) {
    // this.ar.params.subscribe((params) => {
    //   // this.filterPeriod = this.galleryService.getPeriod(params['period']);
    // });
  }

  //Egyszer meg kell hívni, hogy lejöjjön az adat
  ngOnInit(): void {
    this.galleryService.getAll();
    this.periodListGenerator();
    this.columsValues();
  }

  periodListGenerator(): void {
    this.galleryList$.subscribe((listObject) => {
      const gallerycopy = listObject;
      gallerycopy.forEach((item) => {
        if (!item.period) '';
        else this.truePeriodListSet.add(item.period);
      });
    });
  }

  onEdit(gallery: GalleryItem): void {
    this.router.navigate(['/', 'gallery', 'edit', gallery.id]);
  }

  onDelete(gallery: GalleryItem): void {
    this.galleryService
      .delete(gallery)
      .subscribe((gallery) => this.router.navigate(['/', 'gallery']));
    this.router.navigate(['/', 'gallery', 'edit', gallery.id]);
  }
  columsValues(): void {
    Object.values(this.config.galleryTableColumns).forEach((item) =>
      this.colums$.push(item.title)
    );
  }
  onSelect(productId: any) {
    console.log(productId.value);
    if (productId.value == '0') this.sortColumnName = 'period';
    else this.sortColumnName = String(productId.value).toLowerCase();
  }
}
