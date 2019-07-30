import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existingcustomers',
  templateUrl: './existingcustomers.page.html',
  styleUrls: ['./existingcustomers.page.scss'],
})
export class ExistingcustomersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAccountPage() {
    this.router.navigateByUrl('accountpage');
  }
}
