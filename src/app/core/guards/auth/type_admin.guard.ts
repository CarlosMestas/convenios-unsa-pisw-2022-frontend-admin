import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
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
    if(this.authService.isSuperAdmin()){
      return true;
    }else{
      this.router.navigate(['../login'])
      return false;
    }
  }
}
