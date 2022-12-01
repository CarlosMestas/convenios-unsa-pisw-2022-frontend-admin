import { ListAcademicNetworkComponent } from './pages/list-academic-network/list-academic-networks.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { AcademicNetworkRouterModule } from './manage-academic-network.routes';
import { NgModule } from '@angular/core';
import { CreateAcademicNetworkComponent } from './components/create-academic-network/create-academic-network.component';


@NgModule({
  declarations:[
    BodyComponent,
    ListAcademicNetworkComponent,
    CreateAcademicNetworkComponent
  ],
  imports:[
    AcademicNetworkRouterModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class ManageAcademicNetworkModule{}
