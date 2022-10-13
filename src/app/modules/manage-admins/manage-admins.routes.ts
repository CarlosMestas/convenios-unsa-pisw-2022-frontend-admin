import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { BodyComponent } from './body/body.component';
import { CreateAdminComponent } from './pages/create-admin/create-admin.component';
import { ListAdminsComponent } from './pages/list-admins/manage-admins.component';

const routesValues = {
  ROUTE_CREATE_ADMIN:"crear-administrador",
  ROUTE_LIST_ADMINS:"lista-administradores",
  ROUTE_UPDATE_ADMIN:"modificar-administrador"
};
const routes: Routes  = [
  {
    path:'',
    component:BodyComponent,
    children:[
      {
        path:'',
        redirectTo:routesValues.ROUTE_LIST_ADMINS,
        pathMatch:"full"
      },
      {
        path: routesValues.ROUTE_CREATE_ADMIN,
        component:CreateAdminComponent
      },
      {
        path: routesValues.ROUTE_LIST_ADMINS,
        component:ListAdminsComponent
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ManageAdminRoutingModule{
  public static ROUTES_VALUES = routesValues;
}
