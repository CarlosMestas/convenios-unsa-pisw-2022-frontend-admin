import { IAppState } from '@ngrx/app.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {IRole} from "@app/shared/interfaces/role.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Store } from '@ngrx/store';
import { roleGetAllStateSelector } from '@app/ngrx/selectors/role/role.selectors';
import { rolesGetAllRequestAction } from '@app/ngrx/actions/role/role.actions';
import { AdminCreate } from '@app/shared/models/admin-create.model';
import {ActivatedRoute, Router} from '@angular/router'
import {ManageAdminRoutingModule} from "@modules/manage-admins/manage-admins.routes";
import {adminViewDataAdminStateSelector} from "@ngrx/selectors/admin/admin.selectors";
import {AdminService} from "@core/services/admin/admin.service";
import {showLoadComponentAction, unshowLoadComponentAction} from "@ngrx/actions/components/components.actions";
import {MessageService} from "primeng/api";

@Component({
  providers: [MessageService],
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {
  roles$:Observable<IRole[]>
  form:FormGroup
  passwordSuggest = ""
  isEditForm = false
  updateAdminLink:string= ManageAdminRoutingModule.ROUTES_VALUES.ROUTE_UPDATE_ADMIN
  constructor(
    private store:Store<IAppState>,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private adminService: AdminService,
    private messageService: MessageService,
  ) {
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      address:new FormControl(''),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required])
    } )
    this.roles$ = new Observable<IRole[]>()
  }

  ngOnInit(): void {
    this.store.dispatch(rolesGetAllRequestAction())
    this.roles$ = this.store.select(roleGetAllStateSelector)
    if(this.router.url == "/admin/administradores/"+this.updateAdminLink){
      this.store.dispatch(showLoadComponentAction())
      this.isEditForm = true
      this.store.select(adminViewDataAdminStateSelector).subscribe(admin => {
        this.adminService.getAdminById(admin.id).subscribe(resp => {
          this.form.controls['name'].reset(resp.data.name);
          this.form.controls['lastname'].reset(resp.data.lastname);
          this.form.controls['address'].reset(resp.data.address);
          this.form.controls['phone'].reset(resp.data.phone);
          this.form.controls['email'].reset(resp.data.email);
          this.form.controls['password'].reset(resp.data.password)
          this.form.controls['role'].setValue(resp.data.role.id)

          this.store.dispatch(unshowLoadComponentAction())
        })
      })
    }
    else {
      this.isEditForm = false
    }
  }

  generatePassword(){
    this.passwordSuggest = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  }

  submitCreateAdmin(){
    this.store.dispatch(showLoadComponentAction())

    if(this.form.valid){
      const adminSend=new AdminCreate(
        this.form.value["name"],
        this.form.value["lastname"],
        this.form.value["address"],
        this.form.value["phone"],
        this.form.value["email"],
        this.form.value["password"],
        this.form.value["role"]
      )
      if(!this.isEditForm){
        this.adminService.registerAdmin(adminSend).subscribe(r => {
          this.store.dispatch(unshowLoadComponentAction())
        })
      }
      else {
        this.store.select(adminViewDataAdminStateSelector).subscribe(admin => {
          this.adminService.updateAdmin(adminSend, admin.id).subscribe(r => {
            this.store.dispatch(unshowLoadComponentAction())
          })
        })
      }
      //modificar
      this.router.navigate(["../lista-administradores"], {relativeTo: this.activatedRoute})
    }else{
      this.store.dispatch(unshowLoadComponentAction())
      this.messageService.add({key: 'myKey1',severity:'error', summary: 'Ups! algo salió mal', detail: 'Revise los datos'});
    }
  }
}
