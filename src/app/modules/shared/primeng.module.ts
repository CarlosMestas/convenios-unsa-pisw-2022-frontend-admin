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
import {ChipsModule} from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BadgeModule} from 'primeng/badge';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';

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
    FileUploadModule,
    ChipsModule,
    PasswordModule,
    DialogModule,
    ProgressSpinnerModule,
    BadgeModule,
    TreeModule
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
    FileUploadModule,
    ChipsModule,
    PasswordModule,
    DialogModule,
    ProgressSpinnerModule,
    BadgeModule,
    TreeModule
  ]
})
export class PrimeNGModule{}
