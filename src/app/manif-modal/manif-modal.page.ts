import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-manif-modal',
  templateUrl: './manif-modal.page.html',
  styleUrls: ['./manif-modal.page.scss'],
})
export class ManifModalPage implements OnInit {

  manifeste = null ;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.manifeste = this.navParams.get('manifeste');
  }

  closeManif() {
    this.modalController.dismiss();
  }

}
