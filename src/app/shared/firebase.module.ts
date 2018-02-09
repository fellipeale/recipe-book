import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  exports: [
    AngularFirestoreModule,
    AngularFireAuthModule
  ]
})
export class FirebaseModule { }
