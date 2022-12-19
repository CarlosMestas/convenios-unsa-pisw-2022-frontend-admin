import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-data',
  templateUrl: './field-data.component.html',
  styleUrls: ['./field-data.component.scss']
})
export class FieldDataComponent implements OnInit {
  @Input() label!:string
  @Input() data!:string
  constructor() {

  }

  ngOnInit(): void {

  }

}
