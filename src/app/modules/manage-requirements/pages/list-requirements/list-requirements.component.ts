import { requirementsGetAllRequestAction } from '@app/ngrx/actions/convocation/requirement.actions';
import { requirementsSelector } from '@app/ngrx/selectors/convocation/requirements.selector';
import { IAppState } from '@ngrx/app.state';
import { IRequirementResponse } from '@shared/interfaces/requirement.interface';
import { RequirementService } from './../../../../core/services/requirement/requirement.service';
import { UniversityService } from './../../../../core/services/university/university.service';
import { IUniversityResponse } from './../../../../shared/interfaces/university.interface';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-requirements',
  templateUrl: './list-requirements.component.html',
  styleUrls: ['./list-requirements.component.scss']
})
export class ListRequirementsComponent implements OnInit {

  createRequirementLink = ""
    // '../' +
    // ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_CREATE_CONVOCATION;

  requirements$: Observable<IRequirementResponse[]>;

  loading: boolean = true;

  constructor(
    private requirementService: RequirementService,
    private store:Store<IAppState>
  )
  {
    this.requirements$ = new Observable<IRequirementResponse[]>();


  }

  ngOnInit() {
    this.loading = false;
    this.store.dispatch(requirementsGetAllRequestAction())
    this.requirements$ = this.store.select(requirementsSelector)

  }

  clear(table: Table) {
    table.clear();
  }

  returnValue(type: EventTarget | null): string {
    return (type as HTMLInputElement).value;
  }

}
