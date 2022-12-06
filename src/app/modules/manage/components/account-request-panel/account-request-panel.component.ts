import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MessageService} from 'primeng/api';
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {
  showAccountRequestPanelSelector
} from "@ngrx/selectors/components/components.selectors";
import {hideAccountRequestComponentAction} from "@ngrx/actions/components/components.actions";
import {ExternalStudentsService} from "@core/services/external-students/external-students.service";
import {IExternalStudent} from "@shared/interfaces/external-student.interface";

@Component({
  providers: [MessageService],
  selector: 'app-account-request-panel',
  templateUrl: './account-request-panel.component.html',
  styleUrls: ['./account-request-panel.component.scss']
})
export class AccountRequestPanelComponent implements OnInit {
  showPanelComponent$:Observable<boolean>
  display:boolean = false
  requestsExternal: IExternalStudent[]
  displayDialog: boolean = false;
  newExternalStudent = {
    oldEmail: '',
    requestSelected: -1,
    emailCreated: ''
  }

  constructor(
    private store:Store<IAppState>,
    private externalStudent: ExternalStudentsService,
    private messageService: MessageService
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

  showDialog(idReq: number, email: string) {
    this.displayDialog = true;
    this.newExternalStudent.requestSelected = idReq
    this.newExternalStudent.oldEmail = email
  }
  closeDialog(){
    this.displayDialog=false
    this.newExternalStudent.requestSelected = -1
    this.newExternalStudent.oldEmail = ''
    this.newExternalStudent.emailCreated = ''
  }
  acceptRequest(){
    this.externalStudent.attendRequest(
      this.newExternalStudent.requestSelected,
      this.newExternalStudent.emailCreated
    ).subscribe(r=>{
      this.externalStudent.getAllRequestExternalStudents().subscribe(r=>{
        this.requestsExternal = r.data
      })
      this.messageService.add({key: 'myKey1',severity:'success', summary: 'Operación exitosa', detail: 'La creación de cuenta confirmada'});
    })
    this.closeDialog()
  }

}
