import { ListAcademicNetworkComponent } from './pages/list-academic-network/list-academic-networks.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';


const routesValues = {
  ROUTE_LIST_UNIVERSITIES:"lista-redes-academicas"
}

const routes:Routes =[
  {
    path:"",
    component:BodyComponent,
    children:[
      {
        path:"",
        redirectTo:routesValues.ROUTE_LIST_UNIVERSITIES,
        pathMatch:"full"
      },
      {
        path:routesValues.ROUTE_LIST_UNIVERSITIES,
        component:ListAcademicNetworkComponent
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AcademicNetworkRouterModule{
  public static ROUTES_VALUES = routesValues;
}
