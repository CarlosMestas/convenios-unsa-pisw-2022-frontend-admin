import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {adminAuthLoginRequestAction} from "@ngrx/actions/auth/auth.actions";
import {authErrorStateSelector} from "@ngrx/selectors/auth/auth.selectors";
import {AdminLogin} from "@shared/models/admin-login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin:FormGroup

  constructor(
    private store:Store<IAppState>,

    private router:Router
  ) {
    this.formLogin = new FormGroup({
      user: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  public get user():AbstractControl|null{
    return this.formLogin.get('user')
  }
  public get password():AbstractControl| null{
    return this.formLogin.get('password')
  }

  ngOnInit(): void {
  }

  async enviarData(cred: any){
    this.store.dispatch(adminAuthLoginRequestAction(cred))
  }
  loginSubmit(){
    const credentials = new AdminLogin(
      this.formLogin.value["user"],
      this.formLogin.value["password"]
    )
    this.enviarData(credentials).then( r => {
      this.store.select(authErrorStateSelector).subscribe(response => {
        if(response?.code == 400){
          console.log("Datos incorrectos", response.msg)
        }else {
          this.router.navigate(["../admin"])
        }
      })
      }
    )

  }

}
