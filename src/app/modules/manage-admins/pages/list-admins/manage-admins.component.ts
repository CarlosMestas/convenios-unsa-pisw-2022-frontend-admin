import { ManageAdminRoutingModule } from './../../manage-admins.routes';
import { Observable } from 'rxjs';
import {
  adminChangeDataAdminStateAction,
  adminChangeModalStateAction,
  adminGetAllRequestAction
} from '@ngrx/actions/admin/admin.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '@app/ngrx/app.state';
import { IAdmin } from '@shared/interfaces/admin.interface';
import { Component, OnInit,AfterViewInit } from '@angular/core';
import { adminGetAllStateSelector } from '@app/ngrx/selectors/admin/admin.selectors';
import {Admin} from "@shared/models/admin.model";

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.scss']
})
export class ListAdminsComponent implements OnInit, AfterViewInit  {
  createAdminLink:string= ManageAdminRoutingModule.ROUTES_VALUES.ROUTE_CREATE_ADMIN
  selectedCities!: City[]

  displayedColumns: string[] = ['name', 'lastname','address', 'phone', 'email', 'role','actions'];

  adminsData$: Observable<IAdmin[]>

  resultsLength = 0;

 constructor(
    private store:Store<IAppState>
  ) {
    this.adminsData$ = new Observable<IAdmin[]>()
   }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.store.dispatch(adminGetAllRequestAction())
    this.adminsData$ = this.store.select(adminGetAllStateSelector)
  }

  detail(element:IAdmin):void{
    this.store.dispatch(adminChangeModalStateAction({stateModal: true}))
    this.store.dispatch(adminChangeDataAdminStateAction( {admin: element}))
  }
  remove(element:IAdmin):void{

  }
  update(element:IAdmin):void{

  }

}
