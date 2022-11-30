import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe<T extends { [x: string]: any }> implements PipeTransform {
  transform(value: T[], header: string, direction: boolean): T[] {
    if (!Array.isArray(value) || !header) {
      return value;
    }
    header = header.toLowerCase();
    return value.sort((a, b) => {
      direction = !direction;
      console.log(value);
      return (direction = true)
        ? String(a[header]).localeCompare(String(b[header]))
        : String(b[header]).localeCompare(String(a[header]));
    });
  }
}
