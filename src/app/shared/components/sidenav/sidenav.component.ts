import { Component, OnInit } from '@angular/core';
import { ISidenavItem, ISidenavToggle } from '../../interfaces/sidebar.interface';
import {Output,EventEmitter,HostListener} from '@angular/core'
import { faHouseUser,faFolder,faUsers,faSignOutAlt,faBars,faUsersCog} from '@fortawesome/free-solid-svg-icons';
import { ManageRoutingModule } from '@app/modules/manage/manage.routes';
import {roleGetStateSelector} from "@ngrx/selectors/role/roleLog.selectors";
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {Router} from "@angular/router";



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  faBars = faBars
  sidenavData:{[name:string]:ISidenavItem} ={
    'home':{
      url:ManageRoutingModule.ROUTES_VALUES.ROUTE_HOME,
      icon:faHouseUser,
      label:'Home',
      visible:true
    },
    'admins':{
      url:ManageRoutingModule.ROUTES_VALUES.ROUTE_ADMINS,
      icon:faUsersCog,
      label:'Administradores',
      visible: true
    },
    'convocations':{
      url:ManageRoutingModule.ROUTES_VALUES.ROUTE_CONVOCATIONS,
      icon:faFolder,
      label:'Convocatorias',
      visible:true
    },
    'users':{
      url:'usuarios',
      icon:faUsers,
      label:'Usuarios',
      visible:true
    },
    'logout':{
      url:'logout',
      icon:faSignOutAlt,
      label:'Cerrar Sesión',
      visible:true
    }
  }
  // user$:Observable<IUser|null>;
  collapsed:boolean = true
  screenWidth:number = 0
  @Output () OnToggleSideNav: EventEmitter <ISidenavToggle> = new EventEmitter();
  constructor(
    private store:Store<IAppState>,
    private router:Router
  ) { }
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth
    if(this.screenWidth <= 768){
      this.collapsed = true;
      this.OnToggleSideNav.emit({
        collapsed:this.collapsed,
        screenWidth:this.screenWidth
      })
    }
  }
  toggleSideNav():void{
    this.collapsed =!this.collapsed
    this.OnToggleSideNav.emit({
      collapsed:this.collapsed,
      screenWidth:this.screenWidth
    })
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.store.select(roleGetStateSelector).subscribe(evt => {
        this.sidenavData['admins'].visible = evt.id==1
    })
  }
  cerrarSesion(){
    this.router.navigate(["../login"])
    //this.store.dispatch(userLogoutRequestAction())//TODO: call user logout action
  }
}
