import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './../../shared/components/sidenav-item/sidenav-item.component';
import { SidenavComponent } from './../../shared/components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './primeng.module';
import {MenuTopBarComponent} from "@shared/components/menu-top-bar/menu-top-bar.component";

import {HttpClientModule} from "@angular/common/http"
import { AppMenuitemComponent } from '@app/shared/components/sidenav/app.menuitem.component';


@NgModule({
  declarations: [
    SidenavComponent,
    SidenavItemComponent,
    MenuTopBarComponent,
    AppMenuitemComponent
  ],
  imports: [
    FontAwesomeModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    CommonModule,
    HttpClientModule
  ],
  exports:[
    SidenavComponent,
    SidenavItemComponent,
    FontAwesomeModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    MenuTopBarComponent
  ]
})
export class SharedModule { }
