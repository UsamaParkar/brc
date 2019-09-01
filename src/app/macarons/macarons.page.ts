import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-macarons',
  templateUrl: './macarons.page.html',
  styleUrls: ['./macarons.page.scss'],
})
export class MacaronsPage implements OnInit {

  constructor(
    private dataService: DataserviceService) { }

  ngOnInit() {}

  // Logo to Home Router
  goToHome() { this.dataService.goToHome(); }

  // Go to Account Page Icon
  goToAccountPage() { this.dataService.goToAccountPage(); }

}
