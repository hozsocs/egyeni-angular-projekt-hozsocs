import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItem } from '../model/gallery-item';

@Pipe({
  name: 'filterPeriod',
})
export class FilterPeriodPipe<T extends {}> implements PipeTransform {
  transform(list: T[], phrase: string = ''): T[] {
    if (!Array.isArray(list) || !phrase || phrase === '') {
      return list;
    }
    phrase = phrase.toLowerCase();
    const filtered = list.filter((item) =>
      Object.values(item).includes(phrase)
    );

    return filtered;
  }
}
