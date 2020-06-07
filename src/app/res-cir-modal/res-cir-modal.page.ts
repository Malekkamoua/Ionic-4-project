import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, NavController  } from '@ionic/angular';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { ResListeModalPage } from '../res-liste-modal/res-liste-modal.page';

@Component({
  selector: 'app-res-cir-modal',
  templateUrl: './res-cir-modal.page.html',
  styleUrls: ['./res-cir-modal.page.scss'],
})
export class ResCirModalPage implements OnInit {
  @ViewChild('barChart', {static: false}) barChart;

  bars;
  colorArray;
  listeResCir = null;
  circonscription;
  nomCirconscription;
  nomCc;
  NombreSiege;
  NombreListes;
  NombreElecteur;
  NombreInscrits;
  TauxParticipation;
  tab_nom = [];
  tab_nbSieges = [];
  nom;
  nbSiegesParListe;
  listeC;
  listeCc;
  listes;
  sendListe;

  constructor(private navParams: NavParams,private router: Router, private modalController: ModalController, private apiService: ApiService, private navCtrl: NavController ) {}

  ngOnInit() {

    this.listeResCir = this.navParams.get('listes');
    console.log("liste from navParams", this.listeResCir);

    this.nomCirconscription = this.navParams.get('circonscription');

    this.apiService.getListesParCir(this.nomCirconscription).subscribe((data) => {
      console.log(this.nomCirconscription);
      this.listeC = data;
      this.listeCc = data;
      console.log(this.listeC);

      for ( let i = 0; i < this.listeCc.length; i++) {
        this.nom = this.listeCc[i]['nom'];
        this.nbSiegesParListe = this.listeCc[i]['NombreSiege'];
        this.tab_nom.push(this.nom);
        this.tab_nbSieges.push(this.nbSiegesParListe);

        console.log('noms', this.tab_nom);
        console.log('sieges', this.tab_nbSieges);
     }

      return this.listeCc = data;

    });


    this.apiService.getCirconscription().subscribe((data) => {
      this.circonscription = data;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.circonscription.length; i++) {

        if ( this.circonscription[i].nom === this.nomCirconscription ) {
            this.nomCc = this.circonscription[i].nom;
            this.NombreSiege = this.circonscription[i].NombreSiege;
            this.NombreListes = this.circonscription[i].NombreListes ;
            this.NombreElecteur = this.circonscription[i].NombreElecteur ;
            this.NombreInscrits = this.circonscription[i].NombreInscrits ;
            this.TauxParticipation = this.circonscription[i].TauxParticipation ;

        }
      }
    });

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
        'Vote': listeCc.Votes,
       'logo' : listeCc.logo,
       'manifeste' :listeCc.manifeste,
       'membre' :listeCc.membre
      }
    }

    this.router.navigate(['/detail-liste'], navigationExtras);
  }


  closeModal() {
    this.modalController.dismiss();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.createBarChart();
    }, 3000);
  }

  createBarChart() {

    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      options: {
        legend: {
          display: false,
            labels: {
            }
        }
      },
      data: {
        labels: this.tab_nom,
        datasets: [{
            label: '# of Votes',
            data: this.tab_nbSieges,
            backgroundColor: [

        'rgb(0, 186, 211)',
        'rgb(0, 150, 137)',
        'rgb(109, 45, 180)',
        'rgb(255, 112, 67)',
        'rgb(90, 120, 135)',
        'rgb(240, 98, 146)',
        'rgb(139, 195, 75)',
        'rgb(158, 157, 36)',
        'rgb(299, 68, 55)',
        'rgb(0,117,196)',
        'rgb(69,185,185)',
        'rgb(208,46,104)',
        'rgb(69,185,34)',
        'rgb(231,23,23)',
        'rgb(46,151,208)',
        'rgb(218,36,128)',
        'rgb(0, 186, 211)',
        'rgb(0, 150, 137)',
        'rgb(109, 45, 180)',
        'rgb(255, 112, 67)',
        'rgb(90, 120, 135)',
        'rgb(240, 98, 146)',
        'rgb(139, 195, 75)',
        'rgb(158, 157, 36)',
        'rgb(299, 68, 55)',
        'rgb(0,117,196)',
        'rgb(69,185,185)',
        'rgb(208,46,104)',
        'rgb(69,185,34)',
        'rgb(231,23,23)',
        'rgb(46,151,208)',
        'rgb(218,36,128)'

            ],
            borderColor: [

        'rgb(0, 186, 211)',
        'rgb(0, 150, 137)',
        'rgb(109, 45, 180)',
        'rgb(255, 112, 67)',
        'rgb(90, 120, 135)',
        'rgb(240, 98, 146)',
        'rgb(139, 195, 75)',
        'rgb(158, 157, 36)',
        'rgb(299, 68, 55)',
        'rgb(0,117,196)',
        'rgb(69,185,185)',
        'rgb(208,46,104)',
        'rgb(69,185,34)',
        'rgb(231,23,23)',
        'rgb(46,151,208)',
        'rgb(218,36,128)',
        'rgb(0, 186, 211)',
        'rgb(0, 150, 137)',
        'rgb(109, 45, 180)',
        'rgb(255, 112, 67)',
        'rgb(90, 120, 135)',
        'rgb(240, 98, 146)',
        'rgb(139, 195, 75)',
        'rgb(158, 157, 36)',
        'rgb(299, 68, 55)',
        'rgb(0,117,196)',
        'rgb(69,185,185)',
        'rgb(208,46,104)',
        'rgb(69,185,34)',
        'rgb(231,23,23)',
        'rgb(46,151,208)',
        'rgb(218,36,128)'
            ],
            borderWidth: 1
        }]
    },

})
  }


  async OpenDetails(id) {
    console.log('id passed', id);

    this.apiService.getListes().subscribe((data) => {
      this.listeCc = data;
      console.log('listes', this.listeCc);
    });

    for (let i = 0; i < this.listeCc.length; i++) {
      if (this.listeCc[i]['id'] === id) {
          this.sendListe = this.listeCc[i];
          console.log(this.sendListe);
      }
    }

    const modal = await this.modalController.create({
      component : ResListeModalPage,
      componentProps : {
        liste : this.sendListe
      }
    });
    modal.present();
  }

}

