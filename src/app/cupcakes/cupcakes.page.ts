import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cupcakes',
  templateUrl: './cupcakes.page.html',
  styleUrls: ['./cupcakes.page.scss'],
})
export class CupcakesPage implements OnInit {

  constructor(
    private dataService: DataserviceService) { }

  ngOnInit() {}

  // Logo to Home Router
  goToHome() { this.dataService.goToHome(); }

  // Go to Account Page Icon
  goToAccountPage() { this.dataService.goToAccountPage(); }

}
