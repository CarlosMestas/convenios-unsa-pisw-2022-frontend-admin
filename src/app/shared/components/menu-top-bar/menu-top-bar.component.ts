import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {showAccountRequestPanelComponentAction} from "@ngrx/actions/components/components.actions";

@Component({
  selector: 'app-menu-top-bar',
  templateUrl: './menu-top-bar.component.html',
  styleUrls: ['./menu-top-bar.component.scss']
})
export class MenuTopBarComponent implements OnInit {

  constructor(
    private store:Store<IAppState>,
  ) {

  }
  ngOnInit(): void {
  }

  showPanel(){
    this.store.dispatch(showAccountRequestPanelComponentAction())
  }
}
