import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { NavComponent } from './common/nav/nav.component';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GalleryComponent, NavComponent, AdminComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
