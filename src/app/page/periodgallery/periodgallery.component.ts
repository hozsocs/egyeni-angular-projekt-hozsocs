import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';
import { ConfigService } from 'src/app/service/config.service';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-periodgallery',
  templateUrl: './periodgallery.component.html',
  styleUrls: ['./periodgallery.component.scss'],
})
export class PeriodgalleryComponent {
  searchPeriod: string = '';
  galleryList$: Observable<GalleryItem[]> = this.galleryService.getAll();
  truePeriodListSet = new Set();
  galleryFirstPage: GalleryItem[] = [];
  p: number = 1;
  phrase$: BehaviorSubject<string> = this.config.searchPhrase$;

  constructor(
    private ar: ActivatedRoute,
    private galleryService: GalleryService,
    private router: Router,
    private config: ConfigService
  ) {
    this.ar.params.subscribe((p) => {
      this.searchPeriod = p['period'];
    });
  }
  ngOnInit(): void {}

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

  onEdit(gallery: GalleryItem): void {
    this.router.navigate(['/', 'gallery', 'edit', gallery.period]);
  }
}
