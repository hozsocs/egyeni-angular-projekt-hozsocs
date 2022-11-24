import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryList$: Observable<GalleryItem[]> = this.galleryService.getAll();

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {}
}
