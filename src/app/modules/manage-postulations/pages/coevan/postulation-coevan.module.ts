import { MaterialModule } from './../../../shared/material.module';
import { PrimeNGModule } from './../../../shared/primeng.module';
import { SharedModule } from './../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared Components imported
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { BodyComponent } from './body/body.component';
import { PostulationCoevanRoutingModule } from './postulation-coevan.routes';
import { ApplicationComponent } from './pages/application/application.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { FieldDataComponent } from './components/field-data/field-data.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    BodyComponent,
    ApplicationComponent,
    DocumentationComponent,
    TrackingComponent,
    FieldDataComponent
  ],
  imports: [
    CommonModule,
    PostulationCoevanRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    PrimeNGModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [

  ]
})
export class PostulationCoevanModule { }
