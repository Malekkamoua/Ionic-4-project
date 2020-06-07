import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { NavigationExtras, Router} from '@angular/router';
import { ViewChild } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ResCirModalPage } from '../res-cir-modal/res-cir-modal.page';


@Component({
  selector: 'app-resultat1',
  templateUrl: './resultat1.page.html',
  styleUrls: ['./resultat1.page.scss'],
})
export class Resultat1Page implements OnInit {
  @ViewChild('barChart', {static: false}) barChart;

  bars: any;
  colorArray: any;

  listes;
  listeModif;
  circonscription;

  // tslint:disable-next-line: max-line-length
  constructor(private navcontroller: NavController, private apiService: ApiService, private route: Router, private modalController: ModalController) { }


  ngOnInit() {
    this.apiService.getListes().subscribe((data) => {
      this.listes = data;
      this.listeModif = data;
    });
    this.apiService.getCirconscription().subscribe((data) => {
      this.circonscription = data;
    });
  }

data = [];

 async onContextChange(ctxt: string) {
    this.listeModif = this.listes.filter( (Newlistes) => {
      if (Newlistes.Circonscription === ctxt) {
        this.listeModif = Newlistes;
        this.data.push(this.listeModif);
      }
    });
    console.log(this.data);

    const modal = await this.modalController.create({
      component : ResCirModalPage,
      componentProps : {
        'listes' : this.data ,
        'circonscription' : ctxt
      }
    });
    modal.present();

    this.data = [];
  }

  DetailsListe(listeCc) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id_Liste': listeCc.id,
        'numListe': listeCc.numListe,
        'nomListe': listeCc.nom,
        'nomPresident' : listeCc.Presidant,
        'CcListe': listeCc.Circonscription,
        'TypeListe': listeCc.Type,
        'NombreSieges': listeCc.NombreSiege,
        'pourcentage' : listeCc.pourcentage,
        'Vote': listeCc.Votes,
        'member': listeCc.membre,
       'logo' : listeCc.logo,
       'manifeste' :listeCc.manifeste,
       'membre' :listeCc.membre
        
      }
    }
    this.route.navigate(['/detail-liste'], navigationExtras);
  }

}

