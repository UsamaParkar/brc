import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
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
    public toastController: ToastController,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  async signUp() {
    const { email, password, confirm_password } = this;

    // No Email Toast Controller
    const PasswordsDontMatch = await this.toastController.create({
      message: 'Passwords dont match',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });

    // No Email Toast Controller
    const NoPassword = await this.toastController.create({
      message: 'Please Enter Password',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });

    // Invalid Email Toast Controller
    const InvalidEmail = await this.toastController.create({
      message: 'Please enter a valid Email',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });

    // Weak Password Toast Controller
    const WeakPassword = await this.toastController.create({
      message: 'Weak Password. Should be atleast 6 characters',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });

    // User Created Toast Controller
    const UserCreated = await this.toastController.create({
      message: 'Congrats! Your Account has been created!',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Okay',
      cssClass: 'login-toast'
    });


    if ( password !== confirm_password ) {
      PasswordsDontMatch.present();
      return console.error('Passwords dont match');
    }
    try {
      const res = this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      UserCreated.present();
      console.log('Success', res);
    } catch (error) {
        console.dir(error);

        // Catch Error Conditions
        // Condition 1 - Empty Password Field
        if ( error.message === 'createUserWithEmailAndPassword failed: Second argument "password" must be a valid string.' ) {
          NoPassword.present();
          console.log('Password Not Entered');
        }

        // Condition 2 - Invalid Email Format
        // tslint:disable-next-line: one-line
        else if ( error.message === 'The email address is badly formatted.' ) {
          InvalidEmail.present();
          console.log('Invalid Email');
        }

        // Condition 3 - Weak Password
        // tslint:disable-next-line: one-line
        else if ( error.message === 'Password should be at least 6 characters' ) {
          WeakPassword.present();
          console.log('Weak Password. Should be atleast 6 characters.');
        }
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
