import { MenuService } from './app.menu.service';
import { Component, OnInit } from '@angular/core';
import {
  ISidenavItem,
  ISidenavToggle,
} from '../../interfaces/sidebar.interface';
import { Output, EventEmitter, HostListener } from '@angular/core';
import {
  faUser,
  faHouseUser,
  faFolder,
  faUsers,
  faSignOutAlt,
  faBars,
  faUsersCog,
  faClipboard
} from '@fortawesome/free-solid-svg-icons';
import { ManageRoutingModule } from '@app/modules/manage/manage.routes';
import { roleGetStateSelector } from '@ngrx/selectors/role/roleLog.selectors';
import { Store } from '@ngrx/store';
import { IAppState } from '@ngrx/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menuModel: any[] = [];

  faBars = faBars;
  sidenavData: { [name: string]: ISidenavItem } = {
    perfil: {
      url: ManageRoutingModule.ROUTES_VALUES.ROUTE_PROFILE,
      icon: faUser,
      label: 'Mi perfil',
      visible: true,
    },
    home: {
      url: ManageRoutingModule.ROUTES_VALUES.ROUTE_HOME,
      icon: faHouseUser,
      label: 'Home',
      visible: true,
    },
    admins: {
      url: ManageRoutingModule.ROUTES_VALUES.ROUTE_ADMINS,
      icon: faUsersCog,
      label: 'Administradores',
      visible: true,
    },
    users: {
      url: 'usuarios',
      icon: faUsers,
      label: 'Usuarios',
      visible: true,
    },
    academic_network: {
      url: 'redes_academicas',
      icon: faUsers,
      label: 'Redes Académicas',
      visible: true,
    },
    universities: {
      url: 'universidades',
      icon: faUsers,
      label: 'Usuarios',
      visible: true,
    },
    logout: {
      url: 'logout',
      icon: faSignOutAlt,
      label: 'Cerrar Sesión',
      visible: true,
    },
  };
  // user$:Observable<IUser|null>;
  collapsed: boolean = true;
  screenWidth: number = 0;
  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private menuService:MenuService
    ) {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.menuService.onMenuCollapsed({
        collapsed: true,
        screenWidth: this.screenWidth,
      })
    }
  }
  toggleSideNav(): void {
    this.menuService.onMenuCollapsed({
      collapsed: !this.collapsed,
      screenWidth: this.screenWidth,
    })
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.store.select(roleGetStateSelector).subscribe((evt) => {
      this.sidenavData['admins'].visible = evt.id == 1;
    });

    this.menuService.collapsed$.subscribe(data=>{
      this.collapsed = data.collapsed
    })

    this.menuModel = [
      {
        label: 'Convocatorias',
        icon: 'pi pi-fw pi-bookmark',
        visible:true,
        items: [
          {
            label: 'Convocatorias',
            icon: 'pi pi-fw pi-briefcase',
            routerLink:ManageRoutingModule.ROUTES_VALUES.ROUTE_CONVOCATIONS,
          },
          {
            label: 'Requerimientos',
            icon: 'pi pi-fw pi-copy',
            routerLink:ManageRoutingModule.ROUTES_VALUES.ROUTE_REQUIREMENTS,
          },
          {
            label: 'Universidades',
            icon: 'pi pi-fw pi-server',
            routerLink:ManageRoutingModule.ROUTES_VALUES.ROUTE_UNIVERSITIES,
          },
          {
            label: 'Redes Académicas',
            icon: 'pi pi-fw pi-sitemap',
            routerLink:ManageRoutingModule.ROUTES_VALUES.ROUTE_ACADEMIC_NETWORKS,
          },
        ],
      }
    ];
  }
  cerrarSesion() {
    this.router.navigate(['../login']);
    //this.store.dispatch(userLogoutRequestAction())//TODO: call user logout action
  }
}
