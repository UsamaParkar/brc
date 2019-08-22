import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Variables for Login
  email: '';
  password: '';

  // for storing the returned subscription
  backButtonSubscription;
  appVerNum;
  appName;
  errormsg;
  storagevariable;

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    private appVersion: AppVersion,
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private alertController: AlertController) {

      // Code to get Dynamic App Version
      this.appVersion.getAppName().then((appname) => {
      this.appName = appname;
      });
      this.appVersion.getVersionNumber().then((version) => {
        this.appVerNum = version;
      });
      this.appVersion.getPackageName();
      this.appVersion.getVersionCode();
    }

  ngOnInit() { }

  async loginButton() {

    // Variables for Login
    const { email, password } = this;

    // No Email Toast Controller
    const NoEmailToast = await this.toastController.create({
      message: 'Please Enter Email',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });

    // Invalid Email Toast Controller
    const InavildEmailToast = await this.toastController.create({
      message: 'Email Address is Invalid',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });

    // No Password Toast Controller
    const NoPasswordToast = await this.toastController.create({
      message: 'Please Enter a Password.',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });

    // Invalid User Toast Controller
    const InavildUserToast = await this.toastController.create({
      message: 'User not found. Please check your Login details.',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });

    // Try_Catch block for checking if Login Is successful or not
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigateByUrl('/tabs');
    }

    // Catch Block for getting Errors
    // tslint:disable-next-line: one-line
    catch (err) {
      let reply;
      reply = err;
      console.dir(reply);

      // If Conditions for Displaying the Correct Error
      // Condition 1 - Empty Email
      // tslint:disable-next-line: one-line
      if ( reply.message === 'signInWithEmailAndPassword failed: First argument "email" must be a valid string.' ) {
        NoEmailToast.present();
      }

      // Condition 2 - Wrong/Invalid Email
      // tslint:disable-next-line: one-line
      else if ( reply.message === 'The email address is badly formatted.' ) {
        InavildEmailToast.present();
      }

      // Condition 3 - Empty Password
      // tslint:disable-next-line: one-line
      else if ( reply.message === 'signInWithEmailAndPassword failed: Second argument "password" must be a valid string.' ) {
        NoPasswordToast.present();
      }

      // Condition 4 - Wrong/Inavlid User
      // tslint:disable-next-line: one-line
      else if ( reply.code === 'auth/user-not-found' ) {
        InavildUserToast.present();
      }
    }
  }

  goToSignup() {
    this.router.navigateByUrl('/signup');
  }

}
