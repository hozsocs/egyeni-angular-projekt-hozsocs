import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItem } from '../model/gallery-item';

@Pipe({
  name: 'featured',
})
export class FeaturedPipe<T extends {}> implements PipeTransform {
  transform(list: T[], phrese: string = ''): T[] {
    if (!Array.isArray(list)) {
      return list;
    }

    return list.filter((item) => Object.values(item).includes(phrese));
  }
}
