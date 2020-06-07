import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from './../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-circonscription',
  templateUrl: './detail-circonscription.page.html',
  styleUrls: ['./detail-circonscription.page.scss'],
})
export class DetailCirconscriptionPage implements OnInit {

  nomCc;
  idCc;
  NombreSiegesCc;
  Vote;
  NombreListesCc;
  circonscription;
  listeC;
  listeCc;
  newUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private httpClient: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.idCc = params["id_Cc"];
      this.nomCc = params["nomCc"];
      this.NombreSiegesCc = params["NombreSiegesCc"];
      this.NombreListesCc = params["NombreListesCc"];
      this.Vote = params["Vote"];

      console.log(this.nomCc);
    });
  }

  ngOnInit() {

    this.all()
      this.apiService.getListesParCir(this.nomCc).subscribe((data) => {
        console.log(this.nomCc);
        this.listeC = data;
        this.listeCc = data;
        console.log(this.listeC);
        return this.listeCc = data;
    
      });
    

    // creation nouveau url var url = http://127.0.0.1:8000/apiListeParCir/'+ this.nomCc
    // use the http client to call the api using the new url

    this.newUrl = 'http://legislative-2019.tn/apiListeParCir/' + this.nomCc;
    console.log(this.newUrl);
    this.httpClient.get(this.newUrl).subscribe((data) => {
      console.log(this.nomCc);
      this.listeC = data;
      this.listeCc = data;
      console.log(this.listeCc);
    });

  }

  onContextChange(ctxt: string): void {
    console.log(this.listeC);
    this.listeCc = this.listeC.filter( (Newlistes) => {
      if ( Newlistes.Type === ctxt ) {
        console.log(Newlistes);
        return this.listeCc = Newlistes;
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
      'member': listeCc.membre,
     'logo' : listeCc.logo,
     'manifeste' :listeCc.manifeste,
     'membre' :listeCc.membre
      
    }
  }
  this.router.navigate(['/detail-liste'], navigationExtras);
}


  all(){
    this.apiService.getListesParCir(this.nomCc).subscribe((data) => {
      console.log(this.nomCc);
      this.listeC = data;
      this.listeCc = data;
      console.log(this.listeC);
      return this.listeCc = data;
  
    });
  }

  returnButton(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id_Cc' : this.idCc,
        'nomCc' : this.nomCc,
        'NombreSiegesCc' : this.NombreSiegesCc,
        'NombreListesCc' : this.NombreListesCc,
        'Vote' : this.Vote
      }
    }

    this.router.navigate(['/detail-circonscription'], navigationExtras);
  }

}
