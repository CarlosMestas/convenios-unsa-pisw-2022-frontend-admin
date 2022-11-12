import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "@ngrx/app.state";
import {showLoadComponentStateSelector} from "@ngrx/selectors/components/components.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convenios-unsa-pisw-2022-frontend-admin';
  showLoadComponent$:Observable<boolean>
  stateLoadComp:boolean = false
  constructor(
    private store:Store<IAppState>,
  ) {
    this.showLoadComponent$ =  new Observable<boolean>()
  }
  ngOnInit(): void {
    this.showLoadComponent$ = this.store.select(showLoadComponentStateSelector)
    this.showLoadComponent$.subscribe(evt=>{
      this.stateLoadComp = evt
    })
  }
}
