import { DataserviceService } from '../../services/dataservice.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Platform, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { auth } from 'firebase/app';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit, OnDestroy {




  // Variables for Login
  appName;
  errormsg;
  appVerNum;
  email: '';
  logintoken;
  password: '';  
  storagevariable;
  backButtonSubscription;




  constructor(
    private network: Network,
    private storage: Storage,
    private platform: Platform,
    private navCtrl: NavController,
    private appVersion: AppVersion,
    private afAuth: AngularFireAuth,
    private dataService: DataserviceService
  ) {
      this.network
      this.checkStorageToken(); // Function to check Login Token

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




  // Check Storage to see if the Logged in User's Token is available.
  checkStorageToken() {
    this.storage.get('token').then(
      tokenval => {
      this.logintoken = tokenval;
      console.log('Your email token is', tokenval);
      if ( this.logintoken === null ) {
        console.log('Stay Here at Login');
      } else {
        this.navCtrl.navigateRoot('/tabs');
        console.log('Home');
      }
    });
  }


  


  async loginButton() {

    // Variables for Login
    const { email, password } = this;

    // Try_Catch block for checking if Login Is successful or not
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      console.log("REs",res);
      if (res.operationType === 'signIn') {
        this.storage.set('token', this.email);
        console.log('Success', this.email);
      }
      this.navCtrl.navigateRoot('/tabs');
    } 
    catch (err) {
      let reply;
      reply = err;
      console.dir(reply);


      // If Conditions for Displaying the Correct Error
      // Condition 1 - Empty Email 
      if ( reply.message === 'signInWithEmailAndPassword failed: First argument "email" must be a valid string.' ) {
        this.dataService.Toast(reply.message);
      }


    // Condition 2 - Wrong/Invalid Email
      else if ( reply.message === 'The email address is badly formatted.' ) {
        this.dataService.Toast(reply.message);
      }


    // Condition 3 - Empty Password
      else if ( reply.message === 'signInWithEmailAndPassword failed: Second argument "password" must be a valid string.' ) {
        this.dataService.Toast(reply.message);
      }


    // Condition 4 - Wrong/Inavlid User
      // else /** ( reply.code === 'auth/user-not-found' )*/ {
        // this.dataService.Toast(reply.message);
      // } // else {
        // UnknownErrorToast.present();
      // }
    }
  }



  
  goToSignup() { this.dataService.goToSignup(); }




  ionViewDidEnter() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      this.dataService.exitApp();
    });
  }


  ionViewWillLeave() { this.backButtonSubscription.unsubscribe(); }


  ngOnDestroy() { this.backButtonSubscription.unsubscribe(); }

}
