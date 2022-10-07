import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routes';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    BodyComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
