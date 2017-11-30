import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { RecipeModule } from './recipe/recipe.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,

    // features
    RecipeModule,

    // AppRoutingModule must come after our features (above),
    // because features declare routes more specific than the ones
    // declared at AppRoutingModule.
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
