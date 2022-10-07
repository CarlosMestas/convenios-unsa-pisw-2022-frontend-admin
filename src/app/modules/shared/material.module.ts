import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations:[

  ],
  imports:[
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,//TODO: necesary to enable sorting otherwise this is going to give an error
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule{}
