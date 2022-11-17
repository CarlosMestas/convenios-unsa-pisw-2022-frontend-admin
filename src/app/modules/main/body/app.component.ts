import { Component } from '@angular/core';
import { MatIconRegistry, SafeResourceUrlWithIconOptions } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private store:Store<IAppState>,
  ) {
    this.showLoadComponent$ =  new Observable<boolean>()
    this.matIconRegistry.addSvgIconResolver(
      (
        name: string,
        namespace: string
      ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
        switch (namespace) {
          case 'mat':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/material-design-icons/two-tone/${name}.svg`
            );

          case 'logo':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/logos/${name}.svg`
            );

          case 'flag':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/flags/${name}.svg`
            );
          default:{
            return null
          }
        }
      }
    );
  }
  ngOnInit(): void {
    this.showLoadComponent$ = this.store.select(showLoadComponentStateSelector)
    this.showLoadComponent$.subscribe(evt=>{
      this.stateLoadComp = evt
    })
  }




}
