import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , NavigationExtras} from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ManifModalPage } from '../manif-modal/manif-modal.page';
import { MembresModalPage } from '../membres-modal/membres-modal.page';

@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.page.html',
  styleUrls: ['./detail-liste.page.scss'],
})
export class DetailListePage implements OnInit {
 
  nomListe;
  idListe;
  typeListe;
  NombreSieges;
  Vote;
  NumeroListe;
  presidentListe: any;
  circonscription;
  logo;
  listeCc;
  membres;
  manifeste;
  TypeAr;
  listeC;
  nomCc;
  numListe;
  membre;

  constructor(private route: ActivatedRoute , private router: Router, private modalController: ModalController) {
    this.route.queryParams.subscribe(params => {
      this.nomListe = params['nomListe'];
      this.numListe = params['numListe'];
      this.presidentListe = params['nomPresident'];
      this.idListe = params['id_Liste'];
      this.typeListe = params['TypeListe'];
      this.NombreSieges = params['NombreSieges'];
      this.Vote = params['Vote'];
      this.circonscription = params['CcListe'];
      this.logo = params['logo'];
      this.membre = params['membre'];
      this.manifeste = params['manifeste'];


    });
    console.log(this.typeListe);
  }

  ngOnInit() {
  
}

all(listeC) {
  let navigationExtras: NavigationExtras = {
    queryParams: {
      'id_Cc' : listeC.id,
      'nomCc' : listeC.nom,
      'president' : listeC.Presidant,
      'NombreSiegesCc' : listeC.NombreSiege,
      'NombreListesCc' : listeC.NombreListes,
      'Vote' : listeC.Votes,
      'conscription_id' : listeC.image
    }
  }
  this.router.navigate(['/detail-circonscription'], navigationExtras);
}

async OpenManif() {
  const modal = await this.modalController.create({
    component : ManifModalPage,
    componentProps : {
      manifeste : this. manifeste
    }
  });
  modal.present();
}

async OpenMembre() {
  const modal = await this.modalController.create({
    component : MembresModalPage,
    componentProps : {
      membre : this.membre
    }
  });
  modal.present();
}

}
