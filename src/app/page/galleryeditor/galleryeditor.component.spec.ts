import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryeditorComponent } from './galleryeditor.component';

describe('GalleryeditorComponent', () => {
  let component: GalleryeditorComponent;
  let fixture: ComponentFixture<GalleryeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryeditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
