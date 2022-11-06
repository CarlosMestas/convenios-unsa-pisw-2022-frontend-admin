import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { BodyComponent } from './body/body.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component'
import { AuthGuard } from '../../core/guards/auth/auth.guard';


const AdminRoutesValues = {
  ROUTE_HOME:"home",
  ROUTE_ADMINS:"administradores",
  ROUTE_CONVOCATIONS:"convocatorias"
};
const AdminRoutes: Routes  = [
  {
    path:'',
    component:BodyComponent,
    children:[
      {
        path:'',
        redirectTo:AdminRoutesValues.ROUTE_HOME,
        pathMatch:"full"
      },
      {
        path: AdminRoutesValues.ROUTE_HOME,
        component:HomeAdminComponent
      },
      {
        path: AdminRoutesValues.ROUTE_ADMINS,
        loadChildren:()=>import("../manage-admins/manage-admins.module").then(m=>m.ManageAdminsModule),
        canActivate:[AuthGuard]
      },
      {
        path:AdminRoutesValues.ROUTE_CONVOCATIONS,
        loadChildren:()=>import('../manage-convocations/manage-convocations.module').then(m=>m.ManageConvocationsModule)
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(AdminRoutes)],
  exports:[RouterModule]
})
export class ManageRoutingModule{
  public static ROUTES_VALUES = AdminRoutesValues;
}
