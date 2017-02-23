import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { recipesRouting } from './recipes/recipes.routing';
import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' }, //loadChildren is to load the route as lazy loading, it takes a string, indicate the path to the whole module, root folder is the src folder, then have to follow this format, path#ModuleName, this will load the module when /recipes route is triggered
    { path: 'shopping-list', component: ShoppingListComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
