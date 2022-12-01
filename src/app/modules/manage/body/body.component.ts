import { MenuService } from './../../../shared/components/sidenav/app.menu.service';
import { ISidenavToggle } from '@shared/interfaces/sidebar.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{
  classLoaded:string[]
  title = 'convenios-unsa-pisw-2022-frontend-admin';
  isSideNavCollapsed:boolean = false;
  screenWidth = 0;
  dialogProfileNotConfigured$: Observable<boolean>
  dialogUserRegisterWrongEmail$: Observable<boolean>
  getClass():string{
    let styleClass = ''
    if(!this.isSideNavCollapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }else if(!this.isSideNavCollapsed &&this.screenWidth <=768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
  constructor(
    private menuService:MenuService
  ) {
      this.dialogProfileNotConfigured$ = new Observable<boolean>()
      this.dialogUserRegisterWrongEmail$ = new Observable<boolean>()
      this.classLoaded = []
  }

  ngOnInit(): void {
    of("loaded").pipe(
      delay(1000)
    ).subscribe((loadedclass)=>{
      this.classLoaded.push(loadedclass)
    })

    this.menuService.collapsed$.subscribe(data=>{
      this.isSideNavCollapsed = data.collapsed
      this.screenWidth = data.screenWidth
    })
  }
}
