import { academicNetworkPostRequestAction } from './../../../../ngrx/actions/convocation/academic-network.actions';
import { IAcademicNetwork } from './../../../../shared/interfaces/academic-network.interface';
import { IAppState } from '@ngrx/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-academic-network',
  templateUrl: './create-academic-network.component.html',
  styleUrls: ['./create-academic-network.component.scss']
})
export class CreateAcademicNetworkComponent implements OnInit {

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
      description: new FormControl('',[Validators.required]),
      logo: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  createAcademicNetwork(){
    let newAcademicNetwork:IAcademicNetwork = {
      name: this.formAddEdit.value["name"],
      acronym: this.formAddEdit.value["acronym"],
      description:this.formAddEdit.value["description"],
      logo: this.logo
    }
    this.store.dispatch(academicNetworkPostRequestAction({value:newAcademicNetwork}))
    this.displayModal = false
  }

  fileLoaded(event:any){
    this.logo = event.files[0]
  }

}
