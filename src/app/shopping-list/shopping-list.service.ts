import { Ingredient } from '../shared';
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
      return this.items;
  }

  addItems(items: Ingredient[]) {
      Array.prototype.push.apply(this.items, items); // this is how to push all the array elements at once.
  }

}
