export class GalleryItem {
  //Ez azért kell, hogy dinamikusan lehessen majd hivatkozni az adatokra így: GalleryItem['id']
  [x: string]: any;
  'id'?: number;
  'filename': string = '';
  'path': string = '';
  'period': string = '';
  'title': string = '';
  'date': Date = new Date();
  'description': string = '';
  'featured': boolean = false;
}
