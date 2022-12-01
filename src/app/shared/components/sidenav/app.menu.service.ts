import { ISidenavToggle } from '@shared/interfaces/sidebar.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuChangeEvent } from '@app/shared/interfaces/sidebar.interface';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private menuSource = new Subject<MenuChangeEvent>();
    private resetSource = new Subject();
    private collapsed = new Subject<ISidenavToggle>();
    collapsed$ = this.collapsed.asObservable();
    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(event: MenuChangeEvent, collapsed:boolean) {
        this.menuSource.next(event);
        if(collapsed){
          this.collapsed.next({...this,collapsed:false});
        }
    }

    onMenuCollapsed(event:ISidenavToggle) {
      this.collapsed.next(event);
      if(event.collapsed){
        this.reset()
      }
    }

    reset() {
        this.resetSource.next(true);
    }
}
