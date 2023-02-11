import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {roleGetStateSelector} from "@ngrx/selectors/role/roleLog.selectors";
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {AuthService} from "@core/services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TypeAdminGuard implements CanActivateChild {

  constructor(
    private authService:AuthService,
    private router:Router
  ){

  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserSigned()
      .pipe(
        map(resp => {
          return resp?.data.role.id == 1;
        }),
        catchError((err) => {
          this.router.navigate(['../home']);
          return of(false);
        })
      );
  }
}
