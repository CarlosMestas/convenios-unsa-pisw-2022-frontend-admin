import { ListRequirementsComponent } from './pages/list-requirements/list-requirements.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { RequirementsRouterModule } from './manage-requirements.routes';
import { NgModule } from '@angular/core';
import { CreateRequirementComponent } from './components/create-requirement/create-requirement.component';


@NgModule({
  declarations:[
    BodyComponent,
    ListRequirementsComponent,
    CreateRequirementComponent
  ],
  imports:[
    RequirementsRouterModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class ManageRequirementsModule{}
