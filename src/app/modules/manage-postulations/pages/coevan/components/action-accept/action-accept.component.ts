import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Message} from 'primeng//api';
@Component({
  selector: 'app-action-accept',
  templateUrl: './action-accept.component.html',
  styleUrls: ['./action-accept.component.scss'],
  providers:[MessageService, ConfirmationService]
})
export class ActionAcceptComponent implements OnInit {
  msgs: Message[] = [];
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit(): void {
  }
  confirm(){
    this.confirmationService.confirm({
      message: 'Está seguro que desea concretar esta acción?',
      accept: () => {
        this.msgs = [{severity:'success', summary:'Postulación Aceptada', detail:'Usted ha aceptado la postulación'}];
      },
      reject: () => {
          this.msgs = [{severity:'error', summary:'Acción Cancelada', detail:'Usted ha cancelado la acción'}];
      }
  });

  }
}
