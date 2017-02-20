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

  getRecipe(id: number) {
      return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
      //this will find the passed in recipe index, and remove start from the index, and remove 1 item. alter the original array
  }

  addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
      this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
