import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { NavComponent } from './common/nav/nav.component';
import { AdminComponent } from './page/admin/admin.component';
import { GalleryCardComponent } from './page/gallery-card/gallery-card.component';
import { GalleryeditorComponent } from './page/galleryeditor/galleryeditor.component';
import { FilterPeriodPipe } from './pipe/filter-period.pipe';
import { FivePipe } from './pipe/five.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { PeriodgalleryComponent } from './page/periodgallery/periodgallery.component';
import { GlobalfilterPipe } from './pipe/globalfilter.pipe';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    NavComponent,
    AdminComponent,
    GalleryCardComponent,
    GalleryeditorComponent,
    FilterPeriodPipe,
    FivePipe,
    FeaturedPipe,
    PeriodgalleryComponent,
    GlobalfilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
