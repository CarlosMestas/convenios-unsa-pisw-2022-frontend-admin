import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, Observable, map } from 'rxjs';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin:FormGroup


  constructor(
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
  loginSubmit(){
    this.router.navigate(["../../admin"])
  }

}
