import { Observable } from 'rxjs';
import { adminGetAllRequestAction } from './../../../../ngrx/actions/admin/admin.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '@app/ngrx/app.state';
import { IAdmin } from './../../../../shared/interfaces/admin.interface';
import { Component, OnInit,AfterViewInit } from '@angular/core';
import { adminGetAllStateSelector } from '@app/ngrx/selectors/admin/admin.selectors';
interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.scss']
})
export class ManageAdminsComponent implements OnInit, AfterViewInit  {

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
    console.log("tessssssst ",element)
  }
  remove(element:IAdmin):void{

  }
  update(element:IAdmin):void{

  }

}
