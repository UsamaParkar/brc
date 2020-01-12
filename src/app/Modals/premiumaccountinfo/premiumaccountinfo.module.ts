import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PremiumaccountinfoPage } from './premiumaccountinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PremiumaccountinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PremiumaccountinfoPage]
})
export class PremiumaccountinfoPageModule {}
