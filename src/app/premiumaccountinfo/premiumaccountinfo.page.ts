import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-premiumaccountinfo',
  templateUrl: './premiumaccountinfo.page.html',
  styleUrls: ['./premiumaccountinfo.page.scss'],
})
export class PremiumaccountinfoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
