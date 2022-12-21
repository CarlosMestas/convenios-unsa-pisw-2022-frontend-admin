import { StepperComponent } from './../../shared/components/stepper/stepper.component';
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
import { NgxDocViewerModule } from 'ngx-doc-viewer';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavItemComponent,
    MenuTopBarComponent,
    AppMenuitemComponent,
    StepperComponent
  ],
  imports: [
    FontAwesomeModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    CommonModule,
    HttpClientModule,
    NgxDocViewerModule,
    MessagesModule,
    MessageModule
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
    MenuTopBarComponent,
    StepperComponent,
    NgxDocViewerModule,
    MessagesModule,
    MessageModule
  ]
})
export class SharedModule { }
