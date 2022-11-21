import { SharedModule } from '@modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { ManageRoutingModule } from './manage.routes';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component'
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ProfileAdminComponent} from "./pages/profile-admin/profile-admin.component";
import {
  AccountRequestPanelComponent
} from "@modules/manage/components/account-request-panel/account-request-panel.component";


@NgModule({
  declarations: [
    BodyComponent,
    HomeAdminComponent,
    ProfileAdminComponent,
    AccountRequestPanelComponent
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
