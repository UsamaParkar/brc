import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.page.html',
  styleUrls: ['./cakes.page.scss'],
})
export class CakesPage implements OnInit {

  constructor( private dataService: DataserviceService ) { }

  ngOnInit() { }

  // Logo to Home Router
  goToHome() { this.dataService.goToHome(); }

  // Go to Account Page Icon
  goToAccountPage() { this.dataService.goToAccountPage(); }

}
