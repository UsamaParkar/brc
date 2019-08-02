import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  eventSource = [];
  calendar = {
    mode: 'month',
    currentDate: new Date() };

  constructor(
    private router: Router) {}

  onEventSelected() { }

  onViewTitleChanged() {}

  onTimeSelected() {}

  // Navigate to Account Page
  goToAccountPage() {
    this.router.navigateByUrl('/accountpage');
  }

  // Navigate to Order Card Details Page
  goToOrderDetails() {
    this.router.navigateByUrl('/orderdetails');
  }

}
