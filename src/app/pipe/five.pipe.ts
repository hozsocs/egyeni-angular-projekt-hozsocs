import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItem } from '../model/gallery-item';

@Pipe({
  name: 'five',
})
export class FivePipe implements PipeTransform {
  transform(value: GalleryItem[], start: number): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    if (value.length <= 4) return value;
    else {



      return value.slice(start, start + 4);
    }


  }
}
