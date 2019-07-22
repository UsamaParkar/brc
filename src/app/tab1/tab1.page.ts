import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private router: Router) {}

  goToAccountPage()
  // tslint:disable-next-line: one-line
  {
    this.router.navigateByUrl('accountpage');
  }

  goToOrderDetails() {
    this.router.navigateByUrl('orderdetails');
  }
}
