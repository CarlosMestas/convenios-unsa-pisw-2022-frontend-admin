import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {roleGetStateSelector} from "@ngrx/selectors/role/roleLog.selectors";
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router:Router,
    private store:Store<IAppState>,
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let rol = 0
    this.store.select(roleGetStateSelector).subscribe(evt => {
      rol = evt.id
    })
    if( rol==1 ){
      return true;
      }else{
        this.router.navigate(['../login'])
        return false;
      }
  }
}
