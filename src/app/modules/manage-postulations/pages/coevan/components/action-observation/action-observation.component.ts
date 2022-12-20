import { IAppState } from './../../../../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Message } from 'primeng//api';

@Component({
  selector: 'app-action-observation',
  templateUrl: './action-observation.component.html',
  styleUrls: ['./action-observation.component.scss'],
  providers:[MessageService, ConfirmationService]
})
export class ActionObservationComponent implements OnInit {
  displayModal: boolean;
  form: FormGroup;
  esquela!: File;
  msgs: Message[] = [];
  constructor(
    private store: Store<IAppState>,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.displayModal = false;
    this.form = new FormGroup({
      description: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}


  sendObservation() {

    this.confirmationService.confirm({
      message: 'Está seguro que desea concretar esta acción?',
      accept: () => {
        this.msgs = [
          {
            severity: 'success',
            summary: 'Observación Enviada',
            detail: 'Usted ha enviado su observación',
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
  fileLoaded(event: any) {
    this.esquela = event.files[0];
  }
}
