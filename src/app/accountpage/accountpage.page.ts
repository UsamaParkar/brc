import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.page.html',
  styleUrls: ['./accountpage.page.scss'],
})
export class AccountpagePage implements OnInit {

  constructor(
    private dataService: DataserviceService,
  ) { }

  ngOnInit() {
  }

  // Logo to Home Router
  goToHome() {
    this.dataService.goToHome();
  }

  // LogOut Component
  doLogout() {
    this.dataService.doLogout();
  }

  // Exit App Component
  exitApp() {
     this.dataService.exitApp();
  }
}
