import { ListUniversitiesComponent } from './pages/list-universities/list-universities.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { UniversitiesRouterModule } from './manage-universities.routes';
import { NgModule } from '@angular/core';
import { CreateUniversityComponent } from './components/create-university/create-university.component';


@NgModule({
  declarations:[
    BodyComponent,
    ListUniversitiesComponent,
    CreateUniversityComponent
  ],
  imports:[
    UniversitiesRouterModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class ManageUniversitiesModule{}
