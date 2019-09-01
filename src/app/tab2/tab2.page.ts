import { DataserviceService } from '../services/dataservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private dataService: DataserviceService ) { }

  // Route to Account
  goToAccountPage() { this.dataService.goToAccountPage(); }

  // Route to Customer's Page
  goToCustomer() { this.dataService.goToCustomer(); }

  // Route to Add a New Customer
  addNewCustomer() { this.dataService.addNewCustomer(); }

}
