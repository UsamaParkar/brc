import { AppVersion } from '@ionic-native/app-version/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  appVerNum;
  appName;
  constructor(
    private router: Router,
    private appVersion: AppVersion) {
      // Code to get Dynamic App Version
      this.appVersion.getAppName().then((appname) => {
      this.appName = appname;
      });
      this.appVersion.getPackageName();
      this.appVersion.getVersionCode();
      this.appVersion.getVersionNumber().then((version) => {
        this.appVerNum = version;
      });
    }

  ngOnInit() {
  }

  loginButton()
  // tslint:disable-next-line: one-line
  {
    this.router.navigateByUrl('tabs');
  }

  goToSignup() {
    this.router.navigateByUrl('signup');
  }
}
