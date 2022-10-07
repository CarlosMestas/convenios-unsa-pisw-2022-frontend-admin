import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const AppRoutesValues = {
  ROUTE_APP_AUTH:"auth",
  ROUTE_APP_ADMIN:"admin"
};
const routes: Routes = [
  {
    path:'',
    redirectTo:AppRoutesValues.ROUTE_APP_AUTH,
    pathMatch:'full'
  },
  {
    path:AppRoutesValues.ROUTE_APP_AUTH,
    loadChildren:()=>import('../app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:AppRoutesValues.ROUTE_APP_ADMIN,
    loadChildren:()=>import('../app/modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static ROUTES_VALUES = AppRoutesValues;
}
