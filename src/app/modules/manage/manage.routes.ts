import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { BodyComponent } from './body/body.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component'
import {ProfileAdminComponent} from "./pages/profile-admin/profile-admin.component";
import { AuthGuard } from '../../core/guards/auth/auth.guard';


const AdminRoutesValues = {
  ROUTE_HOME:"home",
  ROUTE_PROFILE:"perfil",
  ROUTE_ADMINS:"administradores",
  ROUTE_CONVOCATIONS:"convocatorias",
  ROUTE_UNIVERSITIES:"universidades",
  ROUTE_REQUIREMENTS:"requerimientos",
  ROUTE_ACADEMIC_NETWORKS:"redes-academicas",
  ROUTE_POSTULATIONS:"postulaciones"
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
        path: AdminRoutesValues.ROUTE_PROFILE,
        component:ProfileAdminComponent
      },
      {
        path: AdminRoutesValues.ROUTE_ADMINS,
        loadChildren:()=>import("../manage-admins/manage-admins.module").then(m=>m.ManageAdminsModule),
        canActivate:[AuthGuard]
      },
      {
        path:AdminRoutesValues.ROUTE_CONVOCATIONS,
        loadChildren:()=>import('../manage-convocations/manage-convocations.module').then(m=>m.ManageConvocationsModule)
      },
      {
        path:AdminRoutesValues.ROUTE_UNIVERSITIES,
        loadChildren:()=>import('../manage-universities/manage-universities.module').then(m=>m.ManageUniversitiesModule)
      },
      {
        path:AdminRoutesValues.ROUTE_ACADEMIC_NETWORKS,
        loadChildren:()=>import('../manage-academic-networks/manage-academic-network.module').then(m=>m.ManageAcademicNetworkModule)
      },
      {
        path:AdminRoutesValues.ROUTE_REQUIREMENTS,
        loadChildren:()=>import('../manage-requirements/manage-requirements.module').then(m=>m.ManageRequirementsModule)
      },
      {
        path:AdminRoutesValues.ROUTE_POSTULATIONS+"/:id",
        loadChildren:()=>import('../manage-postulations/postulation.module').then(m=>m.PostulationModule)
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
