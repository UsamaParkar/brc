import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dessertjar',
  templateUrl: './dessertjar.page.html',
  styleUrls: ['./dessertjar.page.scss'],
})
export class DessertjarPage implements OnInit {

  public dessertInAJarCard: boolean;


  constructor(
    private dataService: DataserviceService) { }

  ngOnInit() {}

  // Logo to Home Router
  goToHome() { this.dataService.goToHome(); }

  // Go to Account Page Icon
  goToAccountPage() { this.dataService.goToAccountPage(); }

}
