import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IAdmin} from "@shared/interfaces/admin.interface";
import {Admin} from "@shared/models/admin.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {adminViewStateModalStateSelector, adminViewDataAdminStateSelector} from "@ngrx/selectors/admin/admin.selectors";
import {adminChangeModalStateAction} from "@ngrx/actions/admin/admin.actions";

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})
export class ViewAdminComponent implements OnInit {
  adminData$: Observable<Admin>
  display$: Observable<boolean>
  display: boolean = false
  adminData: Admin = new Admin(0,'','','','','',0)
  constructor(
    private store:Store<IAppState>
  ) {
    this.adminData$ = new Observable<Admin>()
    this.display$ = new Observable<boolean>()
  }

  ngOnInit(): void {
    this.display$ = this.store.select(adminViewStateModalStateSelector)
    this.adminData$ = this.store.select(adminViewDataAdminStateSelector)
    this.display$.subscribe(evt => {
      this.display = evt
    })
    this.adminData$.subscribe(evt => {
      this.adminData = evt
    })
  }
  closeDialog() {
    this.display = false
    this.store.dispatch(adminChangeModalStateAction({stateModal: this.display}))
  }
}
