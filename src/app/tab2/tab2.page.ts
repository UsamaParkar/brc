import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private router: Router
  ) {}

  // Route to Account
  goToAccountPage()
  // tslint:disable-next-line: one-line
  {
    this.router.navigateByUrl('/accountpage');
  }

  goToCustomer() {
    this.router.navigateByUrl('/existingcustomers');
  }

  addNewCustomer() {
    this.router.navigateByUrl('/addcustomer');
  }
}
