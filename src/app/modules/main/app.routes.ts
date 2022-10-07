import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const AppRoutesValues = {
  ROUTE_APP_LOGIN:"login",
  ROUTE_APP_ADMIN:"admin"
};
const routes: Routes = [
  {
    path:'',
    redirectTo:AppRoutesValues.ROUTE_APP_LOGIN,
    pathMatch:'full'
  },
  {
    path:AppRoutesValues.ROUTE_APP_LOGIN,
    component:LoginComponent
  },
  {
    path:AppRoutesValues.ROUTE_APP_ADMIN,
    loadChildren:()=>import('../manage/manage.module').then(m => m.ManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static ROUTES_VALUES = AppRoutesValues;
}
