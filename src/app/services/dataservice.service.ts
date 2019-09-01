import { AlertController, ToastController, NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  constructor(
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  async Toast(msg) {
    const loginToast = await this.toastController.create({
      message: msg,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });
    return loginToast.present();
  }

  // Navigate to Signup
  goToSignup() { this.router.navigateByUrl('/signup'); }


  // Navigate to Login
  goToLogin() { this.router.navigateByUrl('/login'); }


  // Navigate to Account Page
  goToAccountPage() { this.router.navigateByUrl('/accountpage'); }


  // Navigate to Order Card Details Page
  goToOrderDetails() { this.router.navigateByUrl('/orderdetails'); }


  // Navigate to New Order Page
  goToNewOrder() { this.router.navigateByUrl('/tabs/tab5'); }


  // Logo to Home Router
  goToHome() { this.router.navigateByUrl('/tabs'); }


  // Navigate to Existing Customer's Page
  goToCustomer() { this.router.navigateByUrl('/existingcustomers'); }


  // Navigate to Add a New Customer Page
  addNewCustomer() { this.router.navigateByUrl('/addcustomer'); }


  // Navigate to Cakes Page
  goToCakes() { this.router.navigateByUrl('cakes'); }


  // Navigate to Cupcakes Page
  goToCupCakes() { this.router.navigateByUrl('cupcakes'); }


  // Navigate to Brownies Page
  goToBrownies() { this.router.navigateByUrl('brownies'); }


  // Navigate to DessertJar Page
  goToDessertJar() { this.router.navigateByUrl('dessertjar'); }


  // Navigate to Cookies Page
  goToCookies() { this.router.navigateByUrl('cookies'); }


  // Navigate to Macarons Page
  goToMacarons() { this.router.navigateByUrl('macarons'); }


  // Alert Controller For Logout
  async doLogout() {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to Log Out?',
      mode: 'ios',
      buttons:
      [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.storage.clear();
            console.log('set null');
            this.navCtrl.navigateRoot('/login');
          }
        }
       ]
    });
    return alert.present();
   }


  // Exit App Alert
  async exitApp() {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to Exit the App?',
      mode: 'ios',
      buttons:
      [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Exit App');
            // tslint:disable-next-line: no-string-literal
            navigator['app'].exitApp();
          }
        }
      ]
    });
    return alert.present();
  }

}
