import { Store } from '@ngrx/store';
import { IAppState } from '@ngrx/app.state';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "@core/services/auth/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "@core/services/admin/admin.service";
import {IAdmin} from "@shared/interfaces/admin.interface";
import {Observable} from "rxjs";
import {Admin, AdminData} from "@shared/models/admin.model";
import {adminViewDataAdminStateSelector, adminViewStateModalStateSelector} from "@ngrx/selectors/admin/admin.selectors";
import {IRole} from "@shared/interfaces/role.interface";
import {AdminCreate} from "@shared/models/admin-create.model";
import {adminRegisterRequestAction} from "@ngrx/actions/admin/admin.actions";
import {rolesGetAllRequestAction} from "@ngrx/actions/role/role.actions";
import {roleGetAllStateSelector} from "@ngrx/selectors/role/role.selectors";
import {Role} from "@shared/models/role.model";

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss']
})
export class ProfileAdminComponent implements OnInit {
  roles$:Observable<IRole[]>
  isEdit =false
  form:FormGroup
  display: boolean = false
  adminData: AdminData = new AdminData(0,'','','','','','', new Role(0,''))
  selectedRole!:IRole
  passwordSuggest = ""

  constructor(
    private store:Store<IAppState>,
    private adminService: AdminService
) {
    this.form=new FormGroup({
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
    this.store.select(adminViewDataAdminStateSelector).subscribe(admin => {
      this.adminService.getAdminById(1).subscribe(resp => {
        this.adminData = resp.data
      })
    })
  }
  generatePassword(){
    this.passwordSuggest = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  }

  submitUpdateAdmin(){
    if(this.form.valid){
      const adminSend = new AdminCreate(
        this.form.value["name"],
        this.form.value["lastname"],
        this.form.value["address"],
        this.form.value["phone"],
        this.form.value["email"],
        this.form.value["password"],
        (this.form.value["role"] as IRole).id +""
      )
      this.adminService.updateAdmin(adminSend, this.adminData.id).subscribe(r => {})

      this.isEdit = false
    }else{
      console.log("Error en actualizar")
    }
  }
  editProfile(): void {
    this.store.select(adminViewDataAdminStateSelector).subscribe(admin => {
      this.adminService.getAdminById(1).subscribe(resp => {
        this.form.controls['name'].reset(resp.data.name);
        this.form.controls['lastname'].reset(resp.data.lastname);
        this.form.controls['address'].reset(resp.data.address);
        this.form.controls['phone'].reset(resp.data.phone);
        this.form.controls['email'].reset(resp.data.email);
        this.form.controls['password'].reset(resp.data.password);
        this.form.controls['role'].setValue(resp.data.role.id)
      })
    })
    this.isEdit = true
  }
  cancelEditProfile(): void {
    this.isEdit = false
  }

}
