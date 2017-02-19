import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService,
                private route: ActivatedRoute,
                private recipeService: RecipeService,
                private router: Router) { }

  ngOnInit() {
      this.subscription = this.route.params.subscribe(
          (params: any) => {
              this.recipeIndex = params['id'];
              this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
          }
      )
  }

  onEdit() {
      this.router.navigate(['/recipes', this.recipeIndex, 'edit']); //url will be /recipes/id/edit
  }

  onDelete() {
      this.recipeService.deleteRecipe(this.selectedRecipe);
      this.router.navigate(['/recipes']);
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  onAddToShoppingList() {
      this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
