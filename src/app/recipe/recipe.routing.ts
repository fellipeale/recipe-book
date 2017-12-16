import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe.component';
import { RecipeFormComponent } from './recipe-form.component';
import { RecipeListComponent } from './recipe-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeListComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'new',
    component: RecipeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
