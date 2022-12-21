import { IAppState } from '@app/ngrx/app.state';
import { IDocument, IDocumentTypeResponse } from './../../../../shared/interfaces/create-convocation-document.interface';
import { Observable, map } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConvocationDocumentService } from '@app/core/services/convocation/convocation-document.service';
import { Store } from '@ngrx/store';
import { createConvocationDocumentSetStateAction } from '@app/ngrx/actions/convocation/create-convocation-document.actions';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent implements OnInit {
  @Input() displayModal!: boolean;
  @Output() emitDisplayModal: EventEmitter<boolean>;
  documentTypes$:Observable<IDocumentTypeResponse[]>
  formCreateDocument:FormGroup
  documentFile!:File
  constructor(
    private convocationDocumentService:ConvocationDocumentService,
    private store:Store<IAppState>
  ) {
    this.emitDisplayModal = new EventEmitter<boolean>(false)
    this.documentTypes$ = new Observable<IDocumentTypeResponse[]>()
    this.formCreateDocument = new FormGroup({
      name:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      document: new FormControl('',Validators.required),
    })

   }

  ngOnInit(): void {
    this.documentTypes$=this.convocationDocumentService.getAllCreateConvocationDocumentTypes()
    .pipe(
      map(resp=> resp.data)
    )
  }
  hideModalDialog() {
    this.emitDisplayModal.emit(false)
  }
  createDocument(){
    let newDocument:IDocument = {
      name: this.formCreateDocument.value["name"],
      type: (this.formCreateDocument.value["type"] as IDocumentTypeResponse).id,
      document: this.documentFile,
      description: this.formCreateDocument.value["description"]
    }
    this.store.dispatch(createConvocationDocumentSetStateAction({data:newDocument}))
    this.emitDisplayModal.emit(false)
  }
  fileLoaded(event:any){
    this.documentFile =event.files[0]
  }

}
