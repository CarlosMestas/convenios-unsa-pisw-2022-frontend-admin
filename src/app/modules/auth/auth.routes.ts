import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { BodyComponent } from './body/body.component';

const AuthRoutesValues = {
  ROUTE_ADMIN_LOGIN:"login",
};
const AdminRoutes: Routes  = [
  {
    path:'',
    component:BodyComponent,
    children:[
      {
        path:'',
        redirectTo:AuthRoutesValues.ROUTE_ADMIN_LOGIN,
        pathMatch:"full"
      },
      {
        path:AuthRoutesValues.ROUTE_ADMIN_LOGIN,
        component:LoginComponent
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(AdminRoutes)],
  exports:[RouterModule]
})
export class AuthRoutingModule{
  public static ROUTES_VALUES = AuthRoutesValues;
}
