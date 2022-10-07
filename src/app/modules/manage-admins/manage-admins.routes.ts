import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { BodyComponent } from './body/body.component';
import { CreateAdminComponent } from './pages/create-admin/create-admin.component';
import { ListAdminsComponent } from './pages/list-admins/manage-admins.component';

const AdminRoutesValues = {
  ROUTE_CREATE_ADMIN:"crear-administrador",
  ROUTE_LIST_ADMINS:"lista-administradores",
  ROUTE_UPDATE_ADMIN:"modificar-administrador"
};
const AdminRoutes: Routes  = [
  {
    path:'',
    component:BodyComponent,
    children:[
      {
        path:'',
        redirectTo:AdminRoutesValues.ROUTE_LIST_ADMINS,
        pathMatch:"full"
      },
      {
        path: AdminRoutesValues.ROUTE_CREATE_ADMIN,
        component:CreateAdminComponent
      },
      {
        path: AdminRoutesValues.ROUTE_LIST_ADMINS,
        component:ListAdminsComponent
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(AdminRoutes)],
  exports:[RouterModule]
})
export class ManageAdminRoutingModule{
  public static ROUTES_VALUES = AdminRoutesValues;
}
