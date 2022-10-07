import { NgModule } from "@angular/core";
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations:[

  ],
  imports:[
    MultiSelectModule,
    DropdownModule
  ],
  exports:[
    MultiSelectModule,
    DropdownModule
  ]
})
export class PrimeNGModule{}
