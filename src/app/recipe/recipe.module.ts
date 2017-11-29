import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RecipeRoutingModule,
    SharedModule,

    MatCardModule
  ],
  exports: [
    RecipeComponent
  ],
  declarations: [RecipeComponent]
})
export class RecipeModule { }
