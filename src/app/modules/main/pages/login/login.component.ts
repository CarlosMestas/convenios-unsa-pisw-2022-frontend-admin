import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {AdminLogin} from "@shared/models/admin-login.model";
import {AuthService} from "@core/services/auth/auth.service";
import {setRoleAction} from "@ngrx/actions/role/roleLog.actions";
import {setIdAdminStateAction} from "@ngrx/actions/admin/admin.actions";
import {showLoadComponentAction, unshowLoadComponentAction} from "@ngrx/actions/components/components.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin:FormGroup
  public exist = true
  constructor(
    private store:Store<IAppState>,
    private authService:AuthService,
    private router:Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',Validators.required)
    })
  }

  public get email():AbstractControl|null{
    return this.formLogin.get('email')
  }
  public get password():AbstractControl| null{
    return this.formLogin.get('password')
  }

  ngOnInit(): void {
  }

  loginSubmit(){
    this.store.dispatch(showLoadComponentAction())
    this.exist = true
    const credentials = new AdminLogin(
      this.formLogin.value["email"],
      this.formLogin.value["password"]
    )

    this.authService.login(credentials.user,credentials.password).subscribe(response => {
      if(!response.error){
        this.store.dispatch(setRoleAction(response.data.role))
        this.store.dispatch(setIdAdminStateAction({id:response.data.id}))
        this.router.navigate(["../admin"])
        this.store.dispatch(unshowLoadComponentAction())
      }
      else {
        this.store.dispatch(unshowLoadComponentAction())
        this.exist = false
      }
    })
  }

}
