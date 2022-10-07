import { SidenavItemComponent } from './../../shared/components/sidenav-item/sidenav-item.component';
import { SidenavComponent } from './../../shared/components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './primeng.module';




@NgModule({
  declarations: [
    SidenavComponent,
    SidenavItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],
  exports:[
    SidenavComponent,
    SidenavItemComponent,
    FontAwesomeModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ]
})
export class SharedModule { }
