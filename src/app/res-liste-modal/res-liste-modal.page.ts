import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ManifModalPage } from '../manif-modal/manif-modal.page';
import { MembresModalPage } from '../membres-modal/membres-modal.page';

@Component({
  selector: 'app-res-liste-modal',
  templateUrl: './res-liste-modal.page.html',
  styleUrls: ['./res-liste-modal.page.scss'],
})
export class ResListeModalPage implements OnInit {
  liste: any;
  TypeAr: string;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.liste = this.navParams.get('liste');
  }


  closeListe() {
    this.modalController.dismiss();
  }

  async OpenManif() {
    const modal = await this.modalController.create({
      component : ManifModalPage,
      componentProps : {
        manifeste : this.liste['manifeste']
      }
    });
    modal.present();
  }

  async OpenMembre() {
    const modal = await this.modalController.create({
      component : MembresModalPage,
      componentProps : {
        membre : this.liste['membre']
      }
    });
    modal.present();
  }

}
