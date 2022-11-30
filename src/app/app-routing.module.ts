import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { GalleryeditorComponent } from './page/galleryeditor/galleryeditor.component';
import { HomeComponent } from './page/home/home.component';
import { PeriodgalleryComponent } from './page/periodgallery/periodgallery.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'gallery',
    component: GalleryComponent,
  },

  {
    path: 'gallery/:period',
    component: PeriodgalleryComponent,
  },

  {
    path: 'gallery/edit/:id',
    component: GalleryeditorComponent,
  },

  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
