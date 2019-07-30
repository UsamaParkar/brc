import { AppVersion } from '@ionic-native/app-version/ngx';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  backButtonSubscription; // for storing the returned subscription
  appVerNum;
  appName;

  constructor(
    private router: Router,
    private platform: Platform,
    private appVersion: AppVersion,
    private alertController: AlertController) {
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

  loginButton() {
    this.router.navigateByUrl('tabs');
  }

  goToSignup() {
    this.router.navigateByUrl('signup');
  }

}
