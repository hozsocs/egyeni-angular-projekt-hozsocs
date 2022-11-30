import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';
import { GalleryService } from 'src/app/service/gallery.service';

import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  //Táblázat adatok lekérdezése a config service-ből
  columns: ITableColumn[] = this.config.galleryTableColumns;

  //Adatbázis adatok: galleryService --> list$
  galleryList$: Observable<GalleryItem[]> = this.galleryService.getAll();

  phrase$: BehaviorSubject<string> = this.config.searchPhrase$;
  actualsortparameter: string = 'period';
  sortedMode: boolean = true;

  constructor(
    //Service-k injektálása
    private config: ConfigService,
    private galleryService: GalleryService
  ) {}

  //Egyszer meg kell hívni, hogy lejöjjön az adat
  ngOnInit(): void {
    this.galleryService.getAll();
  }
  onClick(buttomType: any) {
    if (this.actualsortparameter === buttomType) {
      this.sortedMode = !this.sortedMode;
    } else {
      this.sortedMode = true;
    }

    this.actualsortparameter = buttomType;
    console.log(this.sortedMode, this.actualsortparameter);
  }
}

/*  //A szervice-ben definiált list$
 galleryList$: Observable<GalleryItem[]> = this.galleryService.list$;

 //A service injektálása
 constructor(private galleryService: GalleryService) {}

 //Egyszer meg kell hívni, hogy lejöjjön az adat
 ngOnInit(): void {
   this.galleryService.getAll();
 } */
