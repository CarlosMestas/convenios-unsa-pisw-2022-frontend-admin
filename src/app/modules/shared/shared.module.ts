import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './../../shared/components/sidenav-item/sidenav-item.component';
import { SidenavComponent } from './../../shared/components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './primeng.module';

import {HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [
    SidenavComponent,
    SidenavItemComponent
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
    HttpClientModule
  ]
})
export class SharedModule { }
