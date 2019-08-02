import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dessertjar',
  templateUrl: './dessertjar.page.html',
  styleUrls: ['./dessertjar.page.scss'],
})
export class DessertjarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Logo to Home Router
  goToHome() {
    this.router.navigateByUrl('/tabs');
  }

  goToAccountPage()
  // tslint:disable-next-line: one-line
  {
    this.router.navigateByUrl('accountpage');
  }

}
