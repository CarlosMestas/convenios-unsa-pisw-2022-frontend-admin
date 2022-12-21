import { universitiesSelector } from './../../../../ngrx/selectors/convocation/universities.selector';
import { universitiesGetAllRequestAction } from './../../../../ngrx/actions/convocation/university.actions';
import { IAppState } from '@ngrx/app.state';
import { UniversityService } from './../../../../core/services/university/university.service';
import { IUniversityResponse } from './../../../../shared/interfaces/university.interface';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-universities',
  templateUrl: './list-universities.component.html',
  styleUrls: ['./list-universities.component.scss']
})
export class ListUniversitiesComponent implements OnInit {

  createUniversityLink = ""
    // '../' +
    // ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_CREATE_CONVOCATION;

  universities$: Observable<IUniversityResponse[]>;

  loading: boolean = true;

  constructor(
    private universityService: UniversityService,
    private store:Store<IAppState>
  )
  {
    this.universities$ = new Observable<IUniversityResponse[]>();


  }

  ngOnInit() {
    this.loading = false;
    this.store.dispatch(universitiesGetAllRequestAction())

    this.universities$ = this.store.select(universitiesSelector)

  }

  clear(table: Table) {
    table.clear();
  }

  returnValue(type: EventTarget | null): string {
    return (type as HTMLInputElement).value;
  }

}
