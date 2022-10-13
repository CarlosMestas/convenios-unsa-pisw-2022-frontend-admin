import { NgModule } from "@angular/core";
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations:[

  ],
  imports:[
    MultiSelectModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  exports:[
    MultiSelectModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ]
})
export class PrimeNGModule{}
