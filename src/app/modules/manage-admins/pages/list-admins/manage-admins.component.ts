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
import { Router, ActivatedRoute } from '@angular/router';
import {AdminService} from "@core/services/admin/admin.service";
import {MessageService} from "primeng/api";

@Component({
  providers: [MessageService],
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.scss']
})
export class ListAdminsComponent implements OnInit, AfterViewInit  {
  createAdminLink:string= ManageAdminRoutingModule.ROUTES_VALUES.ROUTE_CREATE_ADMIN
  updateAdminLink:string= ManageAdminRoutingModule.ROUTES_VALUES.ROUTE_UPDATE_ADMIN

  displayedColumns: string[] = ['name', 'lastname','address', 'phone', 'email', 'role','actions'];
  adminsData$:IAdmin[] = []

  resultsLength = 0;

 constructor(
    private store:Store<IAppState>,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private adminService: AdminService,
    private messageService: MessageService,
 ) {

   }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.adminService.getAllAdmin().subscribe()
    this.getAdmins()
  }

  detail(element:IAdmin):void{
    this.store.dispatch(adminChangeModalStateAction({stateModal: true}))
    this.store.dispatch(adminChangeDataAdminStateAction( {admin: element}))
  }
  remove(element:IAdmin):void{
    this.adminService.deleteAdmin(element.id).subscribe(r=>{
      this.messageService.add({key: 'myKey1',severity:'success', summary: 'Éxito', detail: 'El registro se eliminó correctamente'});
      this.adminService.getAllAdmin().subscribe()
      this.getAdmins()
    })
  }
  update(element:IAdmin):void{
    this.router.navigate(["../"+this.updateAdminLink], {relativeTo: this.activatedRoute})
    this.store.dispatch(adminChangeDataAdminStateAction( {admin: element}))
  }

  getAdmins(): any {
    this.adminService.listAdmins.subscribe(r=>{
      this.adminsData$ = r
    })
    return this.adminsData$;
  }

}
