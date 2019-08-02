import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.page.html',
  styleUrls: ['./cakes.page.scss'],
})
export class CakesPage implements OnInit {

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
