import { ViewConvocationComponent } from './pages/coevan/view-convocation/view-convocation.component';
import { CreateConvocationCodvienenComponent } from './pages/create-convocation-codvienen/create-convocation-codvienen.component';
import { CreateConvocationCodvanComponent } from './pages/create-convocation-codvan/create-convocation-codvan.component';
import { CreateConvocationCoevienenComponent } from './pages/create-convocation-coevienen/create-convocation-coevienen.component';
import { CreateConvocationCoevanComponent } from './pages/coevan/create-convocation-coevan/create-convocation-coevan.component';
import { CreateConvocationPivdoComponent } from './pages/create-convocation-pivdo/create-convocation-pivdo.component';
import { CreateConvocationPiveComponent } from './pages/create-convocation-pive/create-convocation-pive.component';
import { ListConvocationComponent } from './pages/list-convocation/list-convocation.component';
import { UpdateConvocationComponent } from './pages/update-convocation/update-convocation.component';
import { CreateConvocationComponent } from './pages/create-convocation/create-convocation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';


const routesValues = {
  ROUTE_CREATE_CONVOCATION:"crear-convocatoria",
  ROUTE_CREATE_CONVOCATION_PIVE:"crear-convocatoria-pive",
  ROUTE_CREATE_CONVOCATION_PIVDO:"crear-convocatoria-pivdo",
  ROUTE_CREATE_CONVOCATION_COEVAN:"crear-convocatoria-coevan",
  ROUTE_VIEW_CONVOCATION_COEVAN:"view-convocatoria-coevan",
  ROUTE_CREATE_CONVOCATION_COEVIENEN:"crear-convocatoria-coevienen",
  ROUTE_CREATE_CONVOCATION_CODVAN:"crear-convocatoria-codvan",
  ROUTE_CREATE_CONVOCATION_CODVIENEN:"crear-convocatoria-codvienen",
  ROUTE_UPDATE_CONVOCATION:"modificar-convocatoria",
  ROUTE_LIST_CONVOCATION:"lista-convocatorias"
}

const routes:Routes =[
  {
    path:"",
    component:BodyComponent,
    children:[
      {
        path:"",
        redirectTo:routesValues.ROUTE_LIST_CONVOCATION,
        pathMatch:"full"
      },
      {
        path:routesValues.ROUTE_CREATE_CONVOCATION,
        component:CreateConvocationComponent
      }
      ,
      {
        path:routesValues.ROUTE_CREATE_CONVOCATION_PIVE,
        component:CreateConvocationPiveComponent
      }
      ,
      {
        path:routesValues.ROUTE_CREATE_CONVOCATION_PIVDO,
        component:CreateConvocationPivdoComponent
      },
      {
        path:routesValues.ROUTE_CREATE_CONVOCATION_COEVAN,
        component:CreateConvocationCoevanComponent
      },
      {
        path:routesValues.ROUTE_VIEW_CONVOCATION_COEVAN+"/:id",
        component:ViewConvocationComponent
      },
      {
        path:routesValues.ROUTE_CREATE_CONVOCATION_COEVIENEN,
        component:CreateConvocationCoevienenComponent
      },
      {
        path:routesValues.ROUTE_CREATE_CONVOCATION_CODVAN,
        component:CreateConvocationCodvanComponent
      },
      {
        path:routesValues.ROUTE_CREATE_CONVOCATION_CODVIENEN,
        component:CreateConvocationCodvienenComponent
      },
      {
        path:routesValues.ROUTE_UPDATE_CONVOCATION,
        component:UpdateConvocationComponent
      },
      {
        path:routesValues.ROUTE_LIST_CONVOCATION,
        component:ListConvocationComponent
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ManageConvocationsRouterModule{
  public static ROUTES_VALUES = routesValues;
}
