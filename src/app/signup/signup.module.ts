import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup.page';
import { StandardaccountinfoPage } from '../standardaccountinfo/standardaccountinfo.page';
import { PremiumaccountinfoPage } from '../premiumaccountinfo/premiumaccountinfo.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupPage, StandardaccountinfoPage, PremiumaccountinfoPage],
  entryComponents: [StandardaccountinfoPage, PremiumaccountinfoPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SignupPageModule {}
