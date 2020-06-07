import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat2',
  templateUrl: './resultat2.page.html',
  styleUrls: ['./resultat2.page.scss'],
})
export class Resultat2Page implements OnInit {
  @ViewChild('barChart', {
    static: false
  }) barChart;

  bars: any;
  colorArray: any;

  resultatTab;
  listeResultat;
  myChart;
  resultatPartis;
  resultatNonPartis;
  Allres;
  resultatTotalInscrit;
  pourcentage;
  resultatCoa;
  resultatCoalition;
  resultatIndependant;
  nom: any;
  nbSieges: any;
  tab_nom = [];
  tab_nbSieges = [];
  tauxPart: any;
  refresh: boolean;
  listesResultat;
  dataTab: any;

  constructor(private apiService: ApiService, private alertController: AlertController, private router: Router) {}

  ngOnInit() {

    // Resultat tableau
    this.apiService.getResultatTab().subscribe((data) => {
      this.resultatTab = data;
    });

    // Resultat Partis
    this.apiService.getResultatPartis().subscribe((data) => {
      this.resultatPartis = data;
      console.log('Resultat partis : ', this.resultatPartis);
      this.listeResultat = data;


      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.resultatPartis.length; i++) {
        this.nom = this.resultatPartis[i]['nom'];
        this.nbSieges = this.resultatPartis[i]['nbSieges'];
        this.tab_nom.push(this.nom);
        this.tab_nbSieges.push(this.nbSieges);
      }

    });

    // Resultat Coalition
    this.apiService.getResultatCoa().subscribe((data) => {
      this.resultatCoalition = data;
      console.log('Resultat coalition : ', this.resultatCoalition);
      this.listeResultat = data;
    });

    // Resultat Independant
    this.apiService.getResultatCInd().subscribe((data) => {
      this.resultatIndependant = data;
      console.log('Resultat independant : ', this.resultatIndependant);
      this.listeResultat = data;

      this.tab_nom = this.tab_nom.concat(this.resultatCoalition[0]['nom']);
      this.tab_nbSieges = this.tab_nbSieges.concat(this.resultatCoalition[0]['nbSiege']);

      this.tab_nom = this.tab_nom.concat(this.resultatIndependant[0]['nom']);
      this.tab_nbSieges = this.tab_nbSieges.concat(this.resultatIndependant[0]['nbSiege']);
      console.log('tableau nom', this.tab_nom);
      console.log('tableau sieges', this.tab_nbSieges);

    });

    // Liste non partisanes + concat tableau contenant tous les listes
    this.apiService.getListes().subscribe((data) => {
      this.dataTab = [];
      this.listesResultat = data;
      console.log(this.listesResultat);
      for (let i = 0; i < this.listesResultat.length; i++) {
         if(this.listesResultat[i]['Type'] != "حزبية" && this.listesResultat[i]['Pourcentage'] != 0 ){
            this.dataTab.push(this.listesResultat[i]);
         }
         console.log('datatab', this.dataTab);
      }

      this.Allres = this.resultatPartis.concat(this.dataTab);
      console.log('Resultat tout', this.Allres);

      for (let i = 0; i < this.Allres.length; i++) {
        if (this.Allres.length === 0 ) {
          this.presentAlertConfirm();
        }
      }
    });


    // Resultat total inscrit
    this.apiService.getTotalInscrit().subscribe((data) => {
      this.resultatTotalInscrit = data;
      console.log('Total nb inscrits', this.resultatTotalInscrit);
      this.listeResultat = data;

      console.log(this.resultatTotalInscrit[0]["totalInscrits"]);
      this.tauxPart = ( this.resultatTab[0]["totalVotes"]/this.resultatTotalInscrit[0]["totalInscrits"]) * 10;
      this.tauxPart = Number(this.tauxPart).toFixed(2);
    });

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Server error',
      message: 'Server error, refresh plz',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Refresh',
          handler: () => {
            window.location.href = '/resultat2';
            console.log('confirmed');

          }
        }
      ]
    });

    await alert.present();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.createBarChart();
    }, 5000);
  }

  createBarChart() {

    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      options: {
        legend: {
          display: false,
          labels: {}
        }
      },
      data: {
        labels: this.tab_nom,
        datasets: [{
          label: '# of Votes',
          data: this.tab_nbSieges,
          backgroundColor: [

            "rgb(0, 186, 211)",
            "rgb(0, 150, 137)",
            "rgb(109, 45, 180)",
            "rgb(255, 112, 67)",
            "rgb(90, 120, 135)",
            "rgb(240, 98, 146)",
            "rgb(139, 195, 75)",
            "rgb(158, 157, 36)",
            "rgb(299, 68, 55)",
            "rgb(0,117,196)",
            "rgb(69,185,185)",
            "rgb(208,46,104)",
            "rgb(69,185,34)",
            "rgb(231,23,23)",
            "rgb(46,151,208)",
            "rgb(218,36,128)",
            "rgb(0, 186, 211)",
            "rgb(0, 150, 137)",
            "rgb(109, 45, 180)",
            "rgb(255, 112, 67)",
            "rgb(90, 120, 135)",
            "rgb(240, 98, 146)",
            "rgb(139, 195, 75)",
            "rgb(158, 157, 36)",
            "rgb(299, 68, 55)",
            "rgb(0,117,196)",
            "rgb(69,185,185)",
            "rgb(208,46,104)",
            "rgb(69,185,34)",
            "rgb(231,23,23)",
            "rgb(46,151,208)",
            "rgb(218,36,128)"

          ],
          borderColor: [

            "rgb(0, 186, 211)",
            "rgb(0, 150, 137)",
            "rgb(109, 45, 180)",
            "rgb(255, 112, 67)",
            "rgb(90, 120, 135)",
            "rgb(240, 98, 146)",
            "rgb(139, 195, 75)",
            "rgb(158, 157, 36)",
            "rgb(299, 68, 55)",
            "rgb(0,117,196)",
            "rgb(69,185,185)",
            "rgb(208,46,104)",
            "rgb(69,185,34)",
            "rgb(231,23,23)",
            "rgb(46,151,208)",
            "rgb(218,36,128)",
            "rgb(0, 186, 211)",
            "rgb(0, 150, 137)",
            "rgb(109, 45, 180)",
            "rgb(255, 112, 67)",
            "rgb(90, 120, 135)",
            "rgb(240, 98, 146)",
            "rgb(139, 195, 75)",
            "rgb(158, 157, 36)",
            "rgb(299, 68, 55)",
            "rgb(0,117,196)",
            "rgb(69,185,185)",
            "rgb(208,46,104)",
            "rgb(69,185,34)",
            "rgb(231,23,23)",
            "rgb(46,151,208)",
            "rgb(218,36,128)"
          ],
          borderWidth: 1
        }]
      },

    })

  }
}