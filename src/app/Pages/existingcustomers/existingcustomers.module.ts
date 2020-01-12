import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExistingcustomersPage } from './existingcustomers.page';


const routes: Routes = [
  {
    path: '',
    component: ExistingcustomersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ExistingcustomersPage]
})
export class ExistingcustomersPageModule {}
