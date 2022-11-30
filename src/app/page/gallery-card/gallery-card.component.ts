import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss'],
})
export class GalleryCardComponent {
  @Input() gallery: GalleryItem = new GalleryItem();
  @Output() onSelect = new EventEmitter<GalleryItem>();
  @Output() onDeleteSelect = new EventEmitter<GalleryItem>();

  constructor(
    //Service-k injektálása
    private config: ConfigService,
    private galleryService: GalleryService
  ) {}

  raiseEdit(): void {
    this.onSelect.emit(this.gallery);
  }

  raiseDelete(): void {
    this.onDeleteSelect.emit(this.gallery);
  }
}
