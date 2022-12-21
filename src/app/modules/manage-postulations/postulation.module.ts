import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PostulationRoutingModule } from './postulation.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './body/body.component';


// shared Components imported
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { PrimeNGModule } from '../shared/primeng.module';
import { MaterialModule } from '../shared/material.module';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    PostulationRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    PrimeNGModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class PostulationModule { }
