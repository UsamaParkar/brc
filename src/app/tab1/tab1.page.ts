import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = [];

  viewTitle = '';

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(
    private router: Router) {}

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  addEvent() {}

  onEventSelected() { }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected() {}

  // Navigate to Account Page
  goToAccountPage() {
    this.router.navigateByUrl('/accountpage');
  }

  // Navigate to Order Card Details Page
  goToOrderDetails() {
    this.router.navigateByUrl('/orderdetails');
  }

  // Navigate to New Order Page
  async goToNewOrder() {
    this.router.navigateByUrl('/tabs/tab5');
  }

}
