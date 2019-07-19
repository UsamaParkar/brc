import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.page.html',
  styleUrls: ['./accountpage.page.scss'],
})
export class AccountpagePage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigateByUrl('/tabs');
  }
  // LogOut Component
  async doLogout() {
    const alert = await this.alertController.create({
      header: 'Log Out',
      message: 'Are you sure you want to Log Out?',
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
            this.router.navigateByUrl('/login');
          }
        }
       ]
    });
    return alert.present();
   }


   async exitApp() {
     const alert = await this.alertController.create({
       header: 'Exit App',
       message: 'Are you sure you want to Exit the App?',
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
// tslint:disable-next-line: eofline
}