import { DataserviceService } from '../services/dataservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( private dataService: DataserviceService ) {}

  // Navigate to Account Page
  goToAccountPage() { this.dataService.goToAccountPage(); }

  // Navigate to Cakes Page
  goToCakes() { this.dataService.goToCakes(); }

  // Navigate to Cupcakes Page
  goToCupCakes() { this.dataService.goToCupCakes(); }

  // Navigate to Brownies Page
  goToBrownies() { this.dataService.goToBrownies(); }

  // Navigate to DessertJar Page
  goToDessertJar() { this.dataService.goToDessertJar(); }

  // Navigate to Cookies Page
  goToCookies() { this.dataService.goToCookies(); }

  // Navigate to Macarons Page
  goToMacarons() { this.dataService.goToMacarons(); }

}
