import { DataserviceService } from '../../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.page.html',
  styleUrls: ['./orderdetails.page.scss'],
})
export class OrderdetailsPage implements OnInit {

  constructor(
    private dataService: DataserviceService) { }

  ngOnInit() {}

  // Logo to Home Router
  goToHome() { this.dataService.goToHome(); }

  // Go to Account Page Icon
  goToAccountPage() { this.dataService.goToAccountPage(); }
}
