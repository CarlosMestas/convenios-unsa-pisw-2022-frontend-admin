import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {showAccountRequestPanelComponentAction} from "@ngrx/actions/components/components.actions";
import {ExternalStudentsService} from "@core/services/external-students/external-students.service";

@Component({
  selector: 'app-menu-top-bar',
  templateUrl: './menu-top-bar.component.html',
  styleUrls: ['./menu-top-bar.component.scss']
})
export class MenuTopBarComponent implements OnInit {
  numRequestExternal = '0'
  constructor(
    private store:Store<IAppState>,
    private externalStudent: ExternalStudentsService
  ) {
    this.externalStudent.getNumberRequest().subscribe(r=>{
      this.numRequestExternal =  r.data.toString()
    })

  }
  ngOnInit(): void {
  }

  showPanel(){
    this.store.dispatch(showAccountRequestPanelComponentAction())
  }
}
