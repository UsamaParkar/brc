import { DataserviceService } from '../services/dataservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  productsArray = [
    {
      name:'Cakes',
    },
    {
      name:'Cupcakes'
    },
    {
      name:'Brownies'
    },
    {
      name:'Jar Cakes'
    },
    {
      name:'Cookies'
    },
    {
      name:'Macarons'
    }
  ]

  constructor( private dataService: DataserviceService ) {}

  
  
}
