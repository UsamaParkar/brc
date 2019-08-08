import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StandardaccountinfoPage } from '../standardaccountinfo/standardaccountinfo.page';
import { PremiumaccountinfoPage } from '../premiumaccountinfo/premiumaccountinfo.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

  // Modal for Standard Account Access Information
  async standardAccountInfo() {
    const modal = await this.modalController.create({
      component: StandardaccountinfoPage,
      cssClass: 'standardAccountInfo-modal',
      backdropDismiss: true,
      keyboardClose: true,
      showBackdrop: true
    });
    return await modal.present();
   }

  // Modal for Premium Account Access Information
  async premiumAccountInfo() {
    const modal = await this.modalController.create({
      component: PremiumaccountinfoPage,
      cssClass: 'premiumAccountInfo-modal',
      backdropDismiss: true,
      keyboardClose: true,
      showBackdrop: true
    });
    return await modal.present();
   }

}
