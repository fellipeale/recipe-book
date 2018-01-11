import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseModule } from './firebase.module';
import { MaterialModule } from './material.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FirebaseModule
  ]
})
export class SharedModule { }
