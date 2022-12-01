import { IAppState } from '@ngrx/app.state';
import { IRequirement } from './../../../../shared/interfaces/requirement.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { requirementPostRequestAction } from '@app/ngrx/actions/convocation/requirement.actions';

@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.scss']
})
export class CreateRequirementComponent implements OnInit {
  displayModal:boolean
  formAddEdit:FormGroup
  constructor(
    private store:Store<IAppState>
  ) {
    this.displayModal = false
    this.formAddEdit = new FormGroup({
      description: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  createRequirement(){
    let newDocument:IRequirement = {
      description: this.formAddEdit.value["description"]
    }
    this.store.dispatch(requirementPostRequestAction({value:newDocument.description}))
    this.displayModal = false
  }

}
