import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateConvocationComponent } from './pages/create-convocation/create-convocation.component';
import { UpdateConvocationComponent } from './pages/update-convocation/update-convocation.component';
import { NgModule } from "@angular/core";
import { ManageConvocationsRouterModule } from "./manage-convocations.routes";
import { BodyComponent } from './body/body.component';
import { ListConvocationComponent } from './pages/list-convocation/list-convocation.component';
import { CreateConvocationCoevanComponent } from './pages/coevan/create-convocation-coevan/create-convocation-coevan.component';
import { CreateConvocationCoevienenComponent } from './pages/coevienen/create-convocation-coevienen/create-convocation-coevienen.component';
import { CreateConvocationCodvienenComponent } from './pages/codvienen/create-convocation-codvienen/create-convocation-codvienen.component';
import { CreateConvocationCodvanComponent } from './pages/codvan/create-convocation-codvan/create-convocation-codvan.component';
import { CreateConvocationPiveComponent } from './pages/pive/create-convocation-pive/create-convocation-pive.component';
import { CreateConvocationPivdoComponent } from './pages/pivdo/create-convocation-pivdo/create-convocation-pivdo.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { CreateLinkComponent } from './components/create-link/create-link.component';
import { ViewConvocationComponent } from './pages/coevan/view-convocation/view-convocation.component';


@NgModule({
  declarations:[
    BodyComponent,
    UpdateConvocationComponent,
    CreateConvocationComponent,
    ListConvocationComponent,
    CreateConvocationCoevanComponent,
    CreateConvocationCoevienenComponent,
    CreateConvocationCodvienenComponent,
    CreateConvocationCodvanComponent,
    CreateConvocationPiveComponent,
    CreateConvocationPivdoComponent,
    CreateDocumentComponent,
    CreateLinkComponent,
    ViewConvocationComponent
  ],
  imports:[
    ManageConvocationsRouterModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class ManageConvocationsModule{}
