import { TrackingComponent } from './pages/tracking/tracking.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ApplicationComponent } from './pages/application/application.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routesValues = {
  ROUTE_COEVAN_APPLICATION: "postulacion",
  ROUTE_COEVAN_DOCUMENTATION: "documentacion",
  ROUTE_COEVAN_TRACKING: "seguimiento",
};
const routes: Routes = [
  {
    path: '',
    component:BodyComponent,
    children:[
      {
        path: routesValues.ROUTE_COEVAN_APPLICATION,
        component:ApplicationComponent,
      },
      {
        path: routesValues.ROUTE_COEVAN_DOCUMENTATION,
        component:DocumentationComponent,
      },
      {
        path: routesValues.ROUTE_COEVAN_TRACKING,
        component:TrackingComponent,
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PostulationCoevanRoutingModule {
  public static  ROUTES_VALUES = routesValues;
}
