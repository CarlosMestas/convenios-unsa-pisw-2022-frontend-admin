import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Subscription, Observable, map } from 'rxjs';
import { ILink, ILinkTypeResponse } from './../../../../shared/interfaces/create-convocation-link.interface';
import { IAppState } from '@app/ngrx/app.state';
import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { linksFormCreateConvocationCoevanStateSelector } from '@app/ngrx/selectors/convocation/form-create-coevan.selector';
import { ConvocationLinkService } from '@app/core/services/convocation/convocation-link.service';
import { createConvocationLinkSetStateAction } from '@app/ngrx/actions/convocation/create-convocation-link.actions';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.scss']
})
export class CreateLinkComponent implements OnInit {

  @Input() displayModal!: boolean;
  @Output() emitDisplayModal: EventEmitter<boolean>;

  formCreateLink:FormGroup
  linkTypes$:Observable<ILinkTypeResponse[]>
  constructor(
    private store:Store<IAppState>,
    private convocationLinkService:ConvocationLinkService
  ) {
    this.emitDisplayModal = new EventEmitter<boolean>(false)
    this.linkTypes$ = new Observable<ILinkTypeResponse[]>()
    this.formCreateLink = new FormGroup({
      name:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      url: new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
    this.linkTypes$ = this.convocationLinkService.getAllCreateConvocationLinkTypes()
    .pipe(
      map(resp=>resp.data)
    )
  }
  hideModalDialog() {
    this.emitDisplayModal.emit(false)
  }
  createLink(){
    let newLink:ILink = {
      name: this.formCreateLink.value["name"],
      type: (this.formCreateLink.value["type"] as ILinkTypeResponse).id,
      url: this.formCreateLink.value["url"],
      description: this.formCreateLink.value["description"]
    }
    this.store.dispatch(createConvocationLinkSetStateAction({data:newLink}))
    this.emitDisplayModal.emit(false)
  }
}
