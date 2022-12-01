import { ListRequirementsComponent } from './pages/list-requirements/list-requirements.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';


const routesValues = {
  ROUTE_LIST_REQUIREMENTS:"lista-requerimientos"
}

const routes:Routes =[
  {
    path:"",
    component:BodyComponent,
    children:[
      {
        path:"",
        redirectTo:routesValues.ROUTE_LIST_REQUIREMENTS,
        pathMatch:"full"
      },
      {
        path:routesValues.ROUTE_LIST_REQUIREMENTS,
        component:ListRequirementsComponent
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RequirementsRouterModule{
  public static ROUTES_VALUES = routesValues;
}
