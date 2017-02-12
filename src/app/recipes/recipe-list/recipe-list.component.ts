import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy Description', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  }

}
