import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  exports: [
    AuthComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
