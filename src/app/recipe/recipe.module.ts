import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe.routing';
import { SharedModule } from '../shared/shared.module';
import { RecipeUrlComponent } from './recipe-url.component';

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
    RecipeUrlComponent
  ]
})
export class RecipeModule { }
