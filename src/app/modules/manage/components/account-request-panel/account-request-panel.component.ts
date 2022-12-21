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
import {ResourcesService} from "@core/services/postulation/resources.service";

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
    password_created: ''
  }

  constructor(
    private store:Store<IAppState>,
    private externalStudent: ExternalStudentsService,
    private messageService: MessageService,
    private resourcesService:ResourcesService
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
      console.log("REQUEST", r)
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
    this.newExternalStudent.password_created = ''
  }
  acceptRequest(){
    this.externalStudent.attendRequest(
      this.newExternalStudent.requestSelected,
      this.newExternalStudent.password_created
    ).subscribe(r=>{
      this.externalStudent.getAllRequestExternalStudents().subscribe(r=>{
        this.requestsExternal = r.data
      })
      this.messageService.add({key: 'myKey1',severity:'success', summary: 'Operación exitosa', detail: 'La creación de cuenta confirmada'});
    })
    this.closeDialog()
  }
  downloadDocument(url:string){
    this.resourcesService.downloadDocument(url).subscribe(data=>{
      let a  = document.createElement('a')
      a.download = "Justificación"
      a.href = window.URL.createObjectURL(data.data)
      a.click()
    })
  }
}
