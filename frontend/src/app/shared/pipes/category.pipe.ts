import { Pipe, PipeTransform } from '@angular/core';
import { categoryMode } from '../enums/category-mode';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  body = 'stan ciała';
  spirit = 'stan ducha';
  money = 'stan konta';

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case categoryMode.body:
        return this.body;
        break;
      case categoryMode.spirit:
        return this.spirit;
        break;
      case categoryMode.money:
        return this.money;
        break;
      default:
        return value;
    }
  }
}
