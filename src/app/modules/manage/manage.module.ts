import { SharedModule } from '@modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { ManageRoutingModule } from './manage.routes';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component'
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BodyComponent,
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ManageModule { }
