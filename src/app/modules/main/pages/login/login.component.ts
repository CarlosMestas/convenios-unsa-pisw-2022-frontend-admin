import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {AdminLogin} from "@shared/models/admin-login.model";
import {AuthService} from "@core/services/auth/auth.service";

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
      user: new FormControl('', [Validators.required, Validators.email]),
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

  loginSubmit(){
    this.exist = true
    const credentials = new AdminLogin(
      this.formLogin.value["user"],
      this.formLogin.value["password"]
    )

    this.authService.login(credentials.user,credentials.password).subscribe(response => {
      if(!response.error){
        this.router.navigate(["../admin"])
      }
      else {
        console.log("Datos incorrectos", response.msg)
        this.exist = false
      }
    })
  }

}
