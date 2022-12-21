import { IAppState } from './../../../../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Message } from 'primeng//api';

@Component({
  selector: 'app-action-winner',
  templateUrl: './action-winner.component.html',
  styleUrls: ['./action-winner.component.scss'],
  providers:[MessageService, ConfirmationService]
})
export class ActionWinnerComponent implements OnInit {

  displayModal:boolean
  form:FormGroup
  cartaAceptacion!:File

  msgs: Message[] = [];
  constructor(
    private store:Store<IAppState>,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.displayModal = false
    this.form = new FormGroup({
      description: new FormControl('',[Validators.required]),
      logo: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }



  sendWinner() {

    this.confirmationService.confirm({
      message: 'Está seguro que desea concretar esta acción?',
      accept: () => {
        this.msgs = [
          {
            severity: 'success',
            summary: 'Asignado Ganador ',
            detail: 'Usted ha asignado un ganador',
          },
        ];
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'error',
            summary: 'Acción Cancelada',
            detail: 'Usted ha cancelado la acción',
          },
        ];
      },
    });

    this.displayModal = false;
  }

  fileLoaded(event:any){
    this.cartaAceptacion = event.files[0]
  }

}
