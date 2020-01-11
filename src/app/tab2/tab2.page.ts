import { DataserviceService } from '../services/dataservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  customersArray = [
    {
      name:'Usama Parkar',
      totalOrders:'8',
      imgUrl: '../../assets/img/Cupcakes.jpeg'
    },
    {
      name:'Heena Shaikh',
      totalOrders: '2',
      imgUrl: '../../assets/img/Cookie.jpeg'
    },
    {
      name:'Aamir Parkar',
      totalOrders:'10',
      imgUrl: '../../assets/img/Macarons.jpeg'
    },
    {
      name:'Basima Parkar',
      totalOrders:'200',
      imgUrl: '../../assets/img/Cakes.jpeg'
    },
    {
      name:'Afzal Parkar',
      totalOrders:'0',
      imgUrl: '../../assets/img/Brownie.jpeg'
    },
    {
      name:'Heba Dalvi',
      totalOrders:'14',
      imgUrl: '../../assets/img/Jar Cakes.jpeg'
    },
    {
      name:'Anas Dalvi',
      totalOrders:'10',
      imgUrl: '../../assets/img/Brownie Tray.jpg'
    }
  ]

  constructor( private dataService: DataserviceService ) { }


  // Route to Account
  goToAccountPage() { this.dataService.goToAccountPage(); }

  // Route to Customer's Page
  goToCustomer() { this.dataService.goToCustomer(); }

  // Route to Add a New Customer
  addNewCustomer() { this.dataService.addNewCustomer(); }

}
