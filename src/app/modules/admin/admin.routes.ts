import { ManageAdminsComponent } from './pages/manage-admins/manage-admins.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { BodyComponent } from './body/body.component';

import {CreateAdminComponent} from "./pages/create-admin/create-admin.component";

import { HomeAdminComponent } from './pages/home-admin/home-admin.component'


const AdminRoutesValues = {
  ROUTE_ADMIN_HOME:"home",
  ROUTE_ADMIN_MANAGE_CREATE:"crear-admin",
  ROUTE_ADMIN_MANAGE:"gestionar-administradores",
  ROUTE_ADMIN_MANAGE_MODIFICATION:"modifcar-admin"
};
const AdminRoutes: Routes  = [
  {
    path:'',
    component:BodyComponent,
    children:[
      {
        path:'',
        redirectTo:AdminRoutesValues.ROUTE_ADMIN_MANAGE,
        pathMatch:"full"
      },
      {
        path:AdminRoutesValues.ROUTE_ADMIN_MANAGE,
        component:ManageAdminsComponent
      },
      {
        path: AdminRoutesValues.ROUTE_ADMIN_HOME,
        component:HomeAdminComponent
      },
      {
        path: AdminRoutesValues.ROUTE_ADMIN_MANAGE_CREATE,
        component:CreateAdminComponent
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(AdminRoutes)],
  exports:[RouterModule]
})
export class AdminRoutingModule{
  public static ROUTES_VALUES = AdminRoutesValues;
}
