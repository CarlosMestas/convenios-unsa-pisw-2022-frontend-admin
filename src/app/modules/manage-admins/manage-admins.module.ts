import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { BodyComponent } from "./body/body.component";
import { ListAdminsComponent } from './pages/list-admins/manage-admins.component';
import { CreateAdminComponent } from './pages/create-admin/create-admin.component';
import { ManageAdminRoutingModule } from './manage-admins.routes';
import { UpdateAdminComponent } from './pages/update-admin/update-admin.component';
import { ViewAdminComponent } from './pages/view-admin/view-admin.component'

@NgModule({
  declarations: [
    BodyComponent,
    CreateAdminComponent,
    ListAdminsComponent,
    UpdateAdminComponent,
    ViewAdminComponent
  ],
  imports: [
    CommonModule,
    ManageAdminRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ManageAdminsModule { }
