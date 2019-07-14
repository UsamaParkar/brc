import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin()
  // tslint:disable-next-line: one-line
  {
    this.router.navigateByUrl('/login');

  }

}
