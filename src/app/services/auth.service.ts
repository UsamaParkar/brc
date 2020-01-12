import { AngularFirestore } from '@angular/fire/firestore/firestore'
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
  ) { }

  checkDB(){
    console.log("DB",this.afStore.collection('bakers'))
  }
}
