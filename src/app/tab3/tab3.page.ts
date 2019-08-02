import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router) {}

  goToAccountPage()
  // tslint:disable-next-line: one-line
  {
    this.router.navigateByUrl('accountpage');
  }

  goToCakes() {
    this.router.navigateByUrl('cakes');
  }

  goToCupCakes() {
    this.router.navigateByUrl('cupcakes');
  }

  goToBrownies() {
    this.router.navigateByUrl('brownies');
  }

  goToDessertJar() {
    this.router.navigateByUrl('dessertjar');
  }

  goToCookies() {
    this.router.navigateByUrl('cookies');
  }

  goToMacarons() {
    this.router.navigateByUrl('macarons');
  }

}
