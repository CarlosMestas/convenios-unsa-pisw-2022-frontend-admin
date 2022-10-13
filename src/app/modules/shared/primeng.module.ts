import { NgModule } from "@angular/core";
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from "primeng/inputtext";
import { AutoCompleteModule } from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ImageModule} from 'primeng/image';
import {FileUploadModule} from 'primeng/fileupload';
@NgModule({
  imports:[
    MultiSelectModule,
    DropdownModule,
    CardModule,
    TableModule,
    ButtonModule,
    SplitButtonModule,
    ToastModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextareaModule,
    ImageModule,
    FileUploadModule
  ],
  exports:[
    MultiSelectModule,
    DropdownModule,
    CardModule,
    TableModule,
    ButtonModule,
    SplitButtonModule,
    ToastModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextareaModule,
    ImageModule,
    FileUploadModule
  ]
})
export class PrimeNGModule{}
