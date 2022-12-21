import { ListUniversitiesComponent } from './pages/list-universities/list-universities.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';


const routesValues = {
  ROUTE_LIST_UNIVERSITIES:"lista-universidades"
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
        component:ListUniversitiesComponent
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UniversitiesRouterModule{
  public static ROUTES_VALUES = routesValues;
}
