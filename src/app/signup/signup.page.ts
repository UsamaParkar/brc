import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StandardaccountinfoPage } from '../standardaccountinfo/standardaccountinfo.page';
import { PremiumaccountinfoPage } from '../premiumaccountinfo/premiumaccountinfo.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // Variables for Signup
  email: '';
  password: '';
  // tslint:disable-next-line: variable-name
  confirm_password: '';

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  signUp() {
    const { email, password, confirm_password } = this;
    if ( password !== confirm_password ) {
      return console.error('Passwords dont match');
    }
    try {
      const res = this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {
        console.dir(error);
    }
  }


  // Route to Login If User has an Account
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
