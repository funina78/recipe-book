import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Recipe } from '../recipe';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeIndex: number;
  private subscription: Subscription;
  private recipe: Recipe;
  private isNew = true;
  recipeForm: FormGroup;

//In the constructor lists all the things you want to inject to this class/component
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
      this.subscription = this.route.params.subscribe(
          (params: any) => {
              if (params.hasOwnProperty('id')) {
                  this.isNew = false;
                  this.recipeIndex = +params['id'];   //adding '+' converts string to number
                  this.recipe = this.recipeService.getRecipe(this.recipeIndex);  //fetch the recipe
              } else {
                  this.isNew = true;
                  this.recipe = null;
              }
              this.initForm();
          }
      );
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  private navigateBack() {
      this.router.navigate(['../']);
  }

  onSubmit() {
      const newRecipe = this.recipeForm.value;
      if (this.isNew) {
          this.recipeService.addRecipe(newRecipe);
      } else {
          this.recipeService.editRecipe(this.recipe, newRecipe);
      }
      this.navigateBack();
  }

  onCancel() {
      this.navigateBack();
  }

  onAddItem(name: string, amount: string) {
      (<FormArray>this.recipeForm.controls['ingredients']).push(
          new FormGroup({
              name: new FormControl(name, Validators.required),
              amount: new FormControl(amount, [
                  Validators.required,
                  Validators.pattern("\\d+")
              ])
          })
      );
  }

  onRemoveItem(index: number) {
      (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  private initForm() {
      let recipeName = '';
      let recipeImageUrl = '';
      let recipeContent = '';
      let recipeIngredients: FormArray = new FormArray([]);

      if(!this.isNew) {
          if(this.recipe.hasOwnProperty('ingredients')) {
              for (let i = 0; i < this.recipe.ingredients.length; i++) {
                  recipeIngredients.push(
                      new FormGroup({
                          name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
                          amount: new FormControl(this.recipe.ingredients[i].amount, [
                              Validators.required,
                              Validators.pattern("\\d+")
                          ])
                      })
                  );
              }
          }
          recipeName = this.recipe.name;
          recipeImageUrl = this.recipe.imagePath;
          recipeContent = this.recipe.description;
        }
          this.recipeForm = this.formBuilder.group({
              name: [recipeName, Validators.required],
              imagePath: [recipeImageUrl, Validators.required],
              description: [recipeContent, Validators.required],
              ingredients: recipeIngredients
          });
      }

  }
