import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {
  showAccountRequestPanelSelector
} from "@ngrx/selectors/components/components.selectors";
import {hideAccountRequestComponentAction} from "@ngrx/actions/components/components.actions";

@Component({
  selector: 'app-account-request-panel',
  templateUrl: './account-request-panel.component.html',
  styleUrls: ['./account-request-panel.component.scss']
})
export class AccountRequestPanelComponent implements OnInit {
  showPanelComponent$:Observable<boolean>
  display:boolean = false
  constructor(
    private store:Store<IAppState>
  ) {
    this.showPanelComponent$ =  new Observable<boolean>()
  }
  ngOnInit(): void {
    this.showPanelComponent$ = this.store.select(showAccountRequestPanelSelector)
    this.showPanelComponent$.subscribe(evt=>{
      this.display = evt
    })
  }

  hidePanel(){
    this.store.dispatch(hideAccountRequestComponentAction())
  }
}
