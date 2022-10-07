import { IAppState } from './../../../../ngrx/app.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {IRole} from "@app/shared/interfaces/role.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Store } from '@ngrx/store';
import { roleGetAllStateSelector } from '@app/ngrx/selectors/role/role.selectors';
import { rolesGetAllRequestAction } from '@app/ngrx/actions/role/role.actions';
import { adminRegisterRequestAction } from '@app/ngrx/actions/admin/admin.actions';
import { AdminCreate } from '@app/shared/models/admin-create.model';


@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {
  roles$:Observable<IRole[]>
  form:FormGroup
  selectedRole!:IRole
  constructor(
    private store:Store<IAppState>
   ) {
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      address:new FormControl(''),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required])
    }
    )

    this.roles$ = new Observable<IRole[]>()
  }

  ngOnInit(): void {
    this.store.dispatch(rolesGetAllRequestAction())
    this.roles$ = this.store.select(roleGetAllStateSelector)
  }


  submitCreateAdmin(){

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

  }

}
