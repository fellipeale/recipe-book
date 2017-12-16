import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe.routing';
import { SharedModule } from '../shared/shared.module';
import { RecipeUrlComponent } from './recipe-url.component';
import { RecipeFormComponent } from './recipe-form.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeFormItemComponent } from './recipe-form-item.component';

@NgModule({
  imports: [
    RecipeRoutingModule,
    SharedModule,
  ],
  exports: [
    RecipeComponent,
    RecipeUrlComponent
  ],
  declarations: [
    RecipeComponent,
    RecipeUrlComponent,
    RecipeFormComponent,
    RecipeListComponent,
    RecipeFormItemComponent
  ], 
  entryComponents: [
    RecipeFormComponent
  ]
})
export class RecipeModule { }
