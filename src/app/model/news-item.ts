export class NewsItem {
  //Ez azért kell, hogy dinamikusan lehessen majd hivatkozni az adatokra így: GalleryItem['id']
  [x: string]: any;
  'id'?: number;
  'date': Date = new Date();
  'title': string = '';
  'title2': string = '';
  'category': string = '';
  'header': string = '';
  'picture': string = '';
  'link': string = '';
  'linktext': string = '';
  'texthtml': string = '';
}
