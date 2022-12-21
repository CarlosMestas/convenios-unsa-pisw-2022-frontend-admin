import { IAppState } from '@ngrx/app.state';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUniversity } from '@app/shared/interfaces/university.interface';
import { universityPostRequestAction } from '@app/ngrx/actions/convocation/university.actions';

@Component({
  selector: 'app-create-university',
  templateUrl: './create-university.component.html',
  styleUrls: ['./create-university.component.scss']
})
export class CreateUniversityComponent implements OnInit {

  displayModal:boolean
  formAddEdit:FormGroup
  logo!:File
  constructor(
    private store:Store<IAppState>
  ) {
    this.displayModal = false
    this.formAddEdit = new FormGroup({
      name: new FormControl('',[Validators.required]),
      acronym: new FormControl('',[Validators.required]),
      logo: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  createUniversity(){
    let newUniversity:IUniversity = {
      name: this.formAddEdit.value["name"],
      acronym: this.formAddEdit.value["acronym"],
      logo: this.logo,
    }
    this.store.dispatch(universityPostRequestAction({value:newUniversity}))
    this.displayModal = false
  }

  fileLoaded(event:any){
    this.logo = event.files[0]
  }

}
