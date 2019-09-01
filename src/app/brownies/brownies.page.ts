import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brownies',
  templateUrl: './brownies.page.html',
  styleUrls: ['./brownies.page.scss'],
})
export class BrowniesPage implements OnInit {

  constructor( private dataService: DataserviceService ) { }

  ngOnInit() { }

  // Logo to Home Router
  goToHome() { this.dataService.goToHome(); }

  // Go to Account Page Icon
  goToAccountPage() { this.dataService.goToAccountPage(); }

}
