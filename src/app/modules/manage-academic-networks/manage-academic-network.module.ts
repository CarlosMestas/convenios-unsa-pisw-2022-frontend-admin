import { ListAcademicNetworkComponent } from './pages/list-academic-network/list-academic-networks.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { AcademicNetworkRouterModule } from './manage-academic-network.routes';
import { NgModule } from '@angular/core';
import { CreateAcademicNetworkComponent } from './components/create-academic-network/create-academic-network.component';
import { ListUniversitiesComponent } from './components/list-universities/list-universities.component';


@NgModule({
  declarations:[
    BodyComponent,
    ListAcademicNetworkComponent,
    CreateAcademicNetworkComponent,
    ListUniversitiesComponent
  ],
  imports:[
    AcademicNetworkRouterModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class ManageAcademicNetworkModule{}
