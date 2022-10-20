import { ManageConvocationsRouterModule } from './../../manage-convocations.routes';
import { Component, OnInit } from '@angular/core';
import { ETypeConvocations } from '@app/shared/interfaces/convocation.interface';
import { MenuItem,
  // MessageService
} from 'primeng/api';
import { Table } from 'primeng/table';

interface Country {
  name?: string;
  code?: string;
}

interface Representative {
  name?: string;
  image?: string;
}

interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: boolean;
}



@Component({
  selector: 'app-list-convocation',
  // providers: [MessageService],
  templateUrl: './list-convocation.component.html',
  styleUrls: ['./list-convocation.component.scss']
})
export class ListConvocationComponent implements OnInit {
  createConvocationLink = "../"+ManageConvocationsRouterModule.ROUTES_VALUES.ROUTE_CREATE_CONVOCATION
  customers: Customer[];

    representatives: Representative[];

    statuses: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];
    items: MenuItem[];
    constructor(
      // private messageService: MessageService
      ) {
      this.customers = [
        {
          id:1000,
          name:"James Butt",
          country:{
             name:"Algeria",
             code:"dz"
          },
          company:"Benton, John B Jr",
          date:"2015-09-13",
          status:"unqualified",
          verified:true,
          activity:17,
          representative:{
             name:"Ioni Bowcher",
             image:"amyelsner.png"
          },
          balance:false
       },
       {
        id:1000,
        name:"James Butt",
        country:{
           name:"Algeria",
           code:"dz"
        },
        company:"Benton, John B Jr",
        date:"2015-09-13",
        status:"unqualified",
        verified:true,
        activity:17,
        representative:{
           name:"Ioni Bowcher",
           image:"amyelsner.png"
        },
        balance:false
     },
     {
      id:1000,
      name:"James Butt",
      country:{
         name:"Algeria",
         code:"dz"
      },
      company:"Benton, John B Jr",
      date:"2015-09-13",
      status:"unqualified",
      verified:true,
      activity:17,
      representative:{
         name:"Ioni Bowcher",
         image:"amyelsner.png"
      },
      balance:false
   },
   {
    id:1000,
    name:"James Butt",
    country:{
       name:"Algeria",
       code:"dz"
    },
    company:"Benton, John B Jr",
    date:"2015-09-13",
    status:"unqualified",
    verified:true,
    activity:17,
    representative:{
       name:"Ioni Bowcher",
       image:"amyelsner.png"
    },
    balance:false
 },
 {
  id:1000,
  name:"James Butt",
  country:{
     name:"Algeria",
     code:"dz"
  },
  company:"Benton, John B Jr",
  date:"2015-09-13",
  status:"unqualified",
  verified:true,
  activity:17,
  representative:{
     name:"Ioni Bowcher",
     image:"amyelsner.png"
  },
  balance:false
},
{
  id:1000,
  name:"James Butt",
  country:{
     name:"Algeria",
     code:"dz"
  },
  company:"Benton, John B Jr",
  date:"2015-09-13",
  status:"unqualified",
  verified:true,
  activity:17,
  representative:{
     name:"Ioni Bowcher",
     image:"amyelsner.png"
  },
  balance:false
}
      ];
      this.representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "Xuxue Feng", image: 'xuxuefeng.png'}
      ];

      this.statuses = [
          {label: 'Unqualified', value: 'unqualified'},
          {label: 'Qualified', value: 'qualified'},
          {label: 'New', value: 'new'},
          {label: 'Negotiation', value: 'negotiation'},
          {label: 'Renewal', value: 'renewal'},
          {label: 'Proposal', value: 'proposal'}
      ]
      this.items = [
        {label: ETypeConvocations.PIVE, icon: 'pi pi-refresh', routerLink: ['/']},
        {label: ETypeConvocations.PIVDO, icon: 'pi pi-refresh', routerLink: ['/']},
        {label: ETypeConvocations.COEVAN, icon: 'pi pi-refresh', routerLink: ['/']},
        {label: ETypeConvocations.COEVIENEN, icon: 'pi pi-refresh', routerLink: ['/']},
        {label: ETypeConvocations.CODVAN, icon: 'pi pi-refresh', routerLink: ['/']},
        {label: ETypeConvocations.CODVIENEN, icon: 'pi pi-refresh', routerLink: ['/']},
        // {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
        // {separator:true},
        // {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
    }

    ngOnInit() {
        this.loading = false;
        this.customers.forEach(customer => customer.date = new Date(customer.date as Date));
    }

    clear(table: Table) {
        table.clear();
    }


    createConvocation(type:ETypeConvocations){
      switch(type){
        case ETypeConvocations.PIVE:{
          break;
        }
        case ETypeConvocations.PIVDO:{
          break;
        }
        case ETypeConvocations.COEVAN:{
          break;
        }
        case ETypeConvocations.COEVIENEN:{
          break;
        }
        case ETypeConvocations.CODVAN:{
          break;
        }
        case ETypeConvocations.CODVIENEN:{
          break;
        }
      }
    }
}
