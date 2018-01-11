import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  exports: [
    AngularFirestoreModule
  ]
})
export class FirebaseModule { }
