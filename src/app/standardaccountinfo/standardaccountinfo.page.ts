import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-standardaccountinfo',
  templateUrl: './standardaccountinfo.page.html',
  styleUrls: ['./standardaccountinfo.page.scss'],
})
export class StandardaccountinfoPage implements OnInit {

  constructor( private modalController: ModalController ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
