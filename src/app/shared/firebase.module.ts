import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  exports: [
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ]
})
export class FirebaseModule { }
