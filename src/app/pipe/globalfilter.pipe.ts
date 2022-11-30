import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'globalfilter',
})
export class GlobalfilterPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(list: T[], phrase: string = ''): T[] {
    if (!Array.isArray(list) || !phrase) {
      return list;
    }
    phrase = phrase.toLowerCase();

    return list.filter((item) =>
      Object.values(item).join(' ').toLowerCase().includes(phrase)
    );
  }
}
