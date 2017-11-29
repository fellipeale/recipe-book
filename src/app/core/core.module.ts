import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatGridListModule, MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    MatButtonModule,
    MatGridListModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,

    MatButtonModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  declarations: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import CoreModule in the AppModule only.');
    }
  }
 }
