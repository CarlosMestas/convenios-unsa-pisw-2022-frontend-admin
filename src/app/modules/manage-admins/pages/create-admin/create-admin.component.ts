import { IAppState } from '@ngrx/app.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {IRole} from "@app/shared/interfaces/role.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Store } from '@ngrx/store';
import { roleGetAllStateSelector } from '@app/ngrx/selectors/role/role.selectors';
import { rolesGetAllRequestAction } from '@app/ngrx/actions/role/role.actions';
import { adminRegisterRequestAction } from '@app/ngrx/actions/admin/admin.actions';
import { AdminCreate } from '@app/shared/models/admin-create.model';
import { Router } from '@angular/router'
import {ManageAdminRoutingModule} from "@modules/manage-admins/manage-admins.routes";

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {
  roles$:Observable<IRole[]>
  form:FormGroup
  selectedRole!:IRole
  isText = false
  passwordSuggest = ""
  isEditForm = false
  updateAdminLink:string= ManageAdminRoutingModule.ROUTES_VALUES.ROUTE_UPDATE_ADMIN

  constructor(
    private store:Store<IAppState>,
    private router: Router
  ) {
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      address:new FormControl(''),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required])
    }
    )

    this.roles$ = new Observable<IRole[]>()
  }

  ngOnInit(): void {
    this.store.dispatch(rolesGetAllRequestAction())
    this.roles$ = this.store.select(roleGetAllStateSelector)
    if(this.router.url == "/admin/administradores/"+this.updateAdminLink){
      this.isEditForm = true
      
    }
  }

  generatePassword(){
    this.passwordSuggest = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  }

  submitCreateAdmin(){
    if(this.form.valid){
      this.store.dispatch(adminRegisterRequestAction(
        new AdminCreate(
          this.form.value["name"],
          this.form.value["lastname"],
          this.form.value["address"],
          this.form.value["phone"],
          this.form.value["email"],
          this.form.value["password"],
          (this.form.value["role"] as IRole).id +"",
        )
      ))
    }else{
      console.log("Error en registro")
    }


  }

}
