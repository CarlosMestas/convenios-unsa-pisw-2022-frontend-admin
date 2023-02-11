import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {AuthService} from "@core/services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router,
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserSigned()
      .pipe(
        map(resp => {
          if (resp){
            return !resp.error
          }
          else { return false}
        }),
        catchError((err) => {
          this.router.navigate(['../login']);
          return of(false);
        })
      );
  }
}
