import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existingcustomers',
  templateUrl: './existingcustomers.page.html',
  styleUrls: ['./existingcustomers.page.scss'],
})
export class ExistingcustomersPage implements OnInit {

  constructor(
    private dataService: DataserviceService) { }

  ngOnInit() {}

  // Logo to Home Router
  goToHome() { this.dataService.goToHome(); }

  // Go to Account Page Icon
  goToAccountPage() { this.dataService.goToAccountPage(); }

}
