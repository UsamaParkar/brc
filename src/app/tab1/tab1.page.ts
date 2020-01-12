import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { formatDate } from '@angular/common';
import { DataserviceService } from '../services/dataservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public collapseCard: boolean;

  event = { title: '', desc: '', startTime: '', endTime: '', allDay: false };
  calendar = { mode: 'month', currentDate: new Date() };
  minDate = new Date().toISOString();
  eventSource = [];
  testfile: any[];
  viewTitle = '';

  @ViewChild(CalendarComponent, {static: false}) myCal: CalendarComponent;


  ordersArray = [
    {
      product:'Cake',
      size:'1kg',
      customerName:'Chris Green',
      deliveryDate:'19-04-2020',
      url:'../../assets/img/products/Snow Panda Cake.jpg',
    },
    {
      product:'CupCakes',
      size:'6',
      customerName:'Baz Mccullum',
      deliveryDate:'12-09-2020',
      url:'../../assets/img/Cupcakes.jpeg',
    },
    {
      product:'Brownies',
      size:'12',
      customerName:'Lee Sharp',
      deliveryDate:'01-01-2020',
      url:'../../assets/img/products/Chocolate Brownie.jpg',
    },
    {
      product:'Macarons',
      size:'6',
      customerName:'Patt Cummins',
      deliveryDate:'10-07-2020',
      url:'../../assets/img/products/Lemon Macarons.jpg',
    },
    {
      product:'Cookie',
      size:'6',
      customerName:'Tom Banton',
      deliveryDate:'10-07-2020',
      url:'../../assets/img/products/Cookie.jpg',
    }
  ]

  constructor(
    // private http: HttpClient,
    public authService: AuthService,
    private alertCtrl: AlertController,
    private dataService: DataserviceService,
    @Inject(LOCALE_ID) private locale: string
  ) {}



  ngOnInit() { 
    this.authService.checkDB(); 
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




  // Adding a New Event
  addEvent() {
    // tslint:disable-next-line: prefer-const
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    };

    if (eventCopy.allDay) {
      // tslint:disable-next-line: prefer-const
      let start = eventCopy.startTime;
      // tslint:disable-next-line: prefer-const
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }





  async onEventSelected(event) {
    // tslint:disable-next-line: prefer-const // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    // tslint:disable-next-line: prefer-const
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      mode: 'ios',
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }





  onViewTitleChanged(title) {
    this.viewTitle = title;
  }





  onTimeSelected(ev) {
    // tslint:disable-next-line: prefer-const
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }




  // Navigate to Account Page
  goToAccountPage() { this.dataService.goToAccountPage(); }

  
  // Navigate to Order Card Details Page
  goToOrderDetails() { this.dataService.goToOrderDetails(); }


  // Navigate to New Order Page
  goToNewOrder() { this.dataService.goToNewOrder(); }

}
