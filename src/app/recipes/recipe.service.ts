import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pancake', 'Very tasty', 'http://www.ihop.com/-/media/DineEquity/IHop/Images/Menu/MenuItems/Pancakes/Original-Buttermilk-Pancakes/Original_-Buttermilk_Pancakes.ashx', [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork', 2)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [
            new Ingredient('Lettus', 2),
            new Ingredient('Tomato', 2)
        ])
    ];

  constructor() { }

  getRecipes() {
      return this.recipes;
  }

}
