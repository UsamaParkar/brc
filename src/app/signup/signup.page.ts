import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { StandardaccountinfoPage } from '../standardaccountinfo/standardaccountinfo.page';
import { PremiumaccountinfoPage } from '../premiumaccountinfo/premiumaccountinfo.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // Variables for Signup
  email: '';
  password: '';
  confirm_password: '';

  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private modalController: ModalController,
    private dataService: DataserviceService) { }

  ngOnInit() {
  }

  async signUp() {
    const { email, password, confirm_password } = this;

    if ( password !== confirm_password ) {
      const msg = 'Passwords dont match';
      this.dataService.Toast(msg);
      return console.error('Passwords dont match');
    }
    try {
      const res = this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      // UserCreated.present();
      console.log('Success', res);
    } catch (error) {
      this.dataService.Toast(error)
        console.dir(error);

        // Catch Error Conditions
        // Condition 1 - Empty Password Field
        if ( error.message === 'createUserWithEmailAndPassword failed: Second argument "password" must be a valid string.' ) {
          this.dataService.Toast(error.message);
          console.log('Password Not Entered');
        }

        // tslint:disable-next-line: one-line // Condition 2 - Invalid Email Format
        else if ( error.message === 'The email address is badly formatted.' ) {
          this.dataService.Toast(error.message);
          console.log('Invalid Email');
        }

        // tslint:disable-next-line: one-line // Condition 3 - Weak Password
        else if ( error.message === 'Password should be at least 6 characters' ) {
          this.dataService.Toast(error.message);
          console.log('Weak Password. Should be atleast 6 characters.');
        }

        // tslint:disable-next-line: one-line // Condition 4 - Email Already in Use
        else if ( error.message === 'The email address is already in use by another account' ) {
          this.dataService.Toast(error.message);
          console.log('The email address is already in use by another account');
        } else {
          this.dataService.Toast(error.message);
          console.log('Uknown Error');
      }
    }
  }


  // Modal for Standard Account Access Information
  async standardAccountInfo() {
    const modal = await this.modalController.create({
      mode: 'ios',
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
      mode: 'ios',
      component: PremiumaccountinfoPage,
      cssClass: 'premiumAccountInfo-modal',
      backdropDismiss: true,
      keyboardClose: true,
      showBackdrop: true
    });
    return await modal.present();
   }


  // Route to Login If User has an Account
  goToLogin() {
    this.dataService.goToLogin();
  }

}
