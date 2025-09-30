import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByItemKey',
  pure: true,
  standalone: false
})
export class FilterByItemKeyPipe implements PipeTransform {

  transform(items: any[], searchTerm: string, key: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();
    return items.filter((item: any) => item[key].toLowerCase().includes(searchTerm));
  }
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
