import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ManageAdminsComponent } from './pages/manage-admins/manage-admins.component';
import { CreateAdminComponent } from './pages/create-admin/create-admin.component';
import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { AdminRoutingModule } from './admin.routes';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component'
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BodyComponent,
    CreateAdminComponent,
    ManageAdminsComponent,
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AdminModule { }
