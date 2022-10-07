import { Component, OnInit } from '@angular/core';
import { ISidenavItem, ISidenavToggle } from '../../interfaces/sidebar.interface';
import {Output,EventEmitter,HostListener} from '@angular/core'
import { faHouseUser,faFolder,faUsers,faSignOutAlt,faBars,faUsersCog} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  faBars = faBars
  sidenavData:{[name:string]:ISidenavItem} ={
    'home':{
      url:'home',
      icon:faHouseUser,
      label:'Home',
      visible:true
    },
    'admins':{
      url:'gestionar-administradores',
      icon:faUsersCog,
      label:'Administradores',
      visible:true
    },
    'convocations':{
      url:'convocatorias',
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
  constructor() { }
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
  }
  cerrarSesion(){
    // this.store.dispatch(userLogoutRequestAction())//TODO: call user logout action
  }
}
