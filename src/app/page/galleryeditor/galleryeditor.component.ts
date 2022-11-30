import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { GalleryItem } from 'src/app/model/gallery-item';
import { ConfigService, FormField } from 'src/app/service/config.service';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-galleryeditor',
  templateUrl: './galleryeditor.component.html',
  styleUrls: ['./galleryeditor.component.scss'],
})
export class GalleryeditorComponent implements OnInit {
  /* gallery$: Observable<GalleryItem> = this.ar.params.pipe(
    map(params => {
      if(params['id']==='0') {
        return new GalleryItem();
      } else {
        return this.galleryService.get(params['id']);
      }
    }),
      map( gallery=>({...gallery}))
  ); */
  gallery$: Observable<GalleryItem> = this.ar.params.pipe(
    switchMap((params) => {
      if (params['id'] === '0') {
        return this.galleryService.create(params['id']);
      } else {
        return this.galleryService.get(params['id']);
      }
    })
  );

  gallery: GalleryItem | null = null;
  fields: FormField[] = this.config.galleryEditorFormFields;

  galleryFormGroup: FormGroup = new FormGroup({});

  constructor(
    private ar: ActivatedRoute,
    private galleryService: GalleryService,
    private router: Router,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.gallery$.subscribe((item) => {
      this.createControls(item);
      this.gallery = item;
    });
  }
  createControls(gallery: GalleryItem): void {
    this.fields.forEach((field) => {
      const control = new FormControl(gallery[field.key], field.validators);
      this.galleryFormGroup.addControl(field.key, control);
    });
  }

  onUpdate(): void {
    const gallery = this.galleryFormGroup.value;
    gallery.id = this.gallery?.id;
    this.galleryService
      .update(gallery)
      .subscribe((gallery) => this.router.navigate(['/', 'gallery']));
  }
}
