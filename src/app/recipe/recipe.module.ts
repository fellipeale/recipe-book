import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RecipeRoutingModule,
    SharedModule,
  ],
  exports: [
    RecipeComponent
  ],
  declarations: [
    RecipeComponent
  ]
})
export class RecipeModule { }
