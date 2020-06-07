import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-membres-modal',
  templateUrl: './membres-modal.page.html',
  styleUrls: ['./membres-modal.page.scss'],
})
export class MembresModalPage implements OnInit {

  membre = null ;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.membre = this.navParams.get('membre');
  }

  closeMembres() {
    this.modalController.dismiss();
  }

}
