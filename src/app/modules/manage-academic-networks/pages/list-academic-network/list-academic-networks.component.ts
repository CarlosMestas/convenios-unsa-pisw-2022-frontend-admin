import { academicNetworkGetAllRequestAction } from './../../../../ngrx/actions/convocation/academic-network.actions';
import { academicNetworksSelector } from './../../../../ngrx/selectors/convocation/academic-network.selector';
import { IAppState } from '@ngrx/app.state';
import { Store } from '@ngrx/store';
import { AcademicNetworkService } from '@app/core/services/academic-network/academic-network.service';
import { IAcademicNetworkResponse } from '@app/shared/interfaces/academic-network.interface';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list-academicnetwork',
  templateUrl: './list-academic-networks.component.html',
  styleUrls: ['./list-academic-networks.component.scss']
})
export class ListAcademicNetworkComponent implements OnInit {

  createAcademicNetworkLink = ""
    // '../' +
    // ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_CREATE_CONVOCATION;

  academicNetworks$: Observable<IAcademicNetworkResponse[]>;

  loading: boolean = true;

  constructor(
    private academicNetwork: AcademicNetworkService,
    private store:Store<IAppState>
  )
  {
    this.academicNetworks$ = new Observable<IAcademicNetworkResponse[]>();


  }

  ngOnInit() {
    this.loading = false;
    this.store.dispatch(academicNetworkGetAllRequestAction())
    this.academicNetworks$ = this.store.select(academicNetworksSelector)

  }

  clear(table: Table) {
    table.clear();
  }

  returnValue(type: EventTarget | null): string {
    return (type as HTMLInputElement).value;
  }

}
