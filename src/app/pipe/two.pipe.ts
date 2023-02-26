import { Pipe, PipeTransform } from '@angular/core';
import { NewsItem } from '../model/news-item';

@Pipe({
  name: 'two'
})
export class TwoPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(value: NewsItem[], start: number=1): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    if (value.length <= 2) return value;
    else {


      console.log(start)
      return value.slice(start-1, start + 1);
    }


  }

}
