import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {
  showAccountRequestPanelSelector
} from "@ngrx/selectors/components/components.selectors";
import {hideAccountRequestComponentAction} from "@ngrx/actions/components/components.actions";
import {ExternalStudentsService} from "@core/services/external-students/external-students.service";
import {ExternalStudent} from "@shared/models/external-student.model";
import {IExternalStudent} from "@shared/interfaces/external-student.interface";

@Component({
  selector: 'app-account-request-panel',
  templateUrl: './account-request-panel.component.html',
  styleUrls: ['./account-request-panel.component.scss']
})
export class AccountRequestPanelComponent implements OnInit {
  showPanelComponent$:Observable<boolean>
  display:boolean = false
  requestsExternal: IExternalStudent[]

  constructor(
    private store:Store<IAppState>,
    private externalStudent: ExternalStudentsService
  ) {
    this.showPanelComponent$ =  new Observable<boolean>()
    this.requestsExternal = []
  }
  ngOnInit(): void {
    this.showPanelComponent$ = this.store.select(showAccountRequestPanelSelector)
    this.showPanelComponent$.subscribe(evt=>{
      this.display = evt
    })
    this.externalStudent.getAllRequestExternalStudents().subscribe(r=>{
      this.requestsExternal = r.data
    })
  }

  hidePanel(){
    this.store.dispatch(hideAccountRequestComponentAction())
  }
}
