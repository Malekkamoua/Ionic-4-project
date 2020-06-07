import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  environment;
  listes;
  circonscription;
  Newlistes;
  new;
  listeModif;
  c;
  listeC;

  constructor(private apiService: ApiService, private router: Router) { }
  ngOnInit() {
    
    this.apiService.getListes().subscribe((data) => {
      this.listes = data;
      this.listeModif = data;
    });

    this.apiService.getCirconscription().subscribe((data) => {
      this.circonscription = data;
      this.listeC = data;
      console.log(this.listeC);
    });
  }


  onContextChange(ctxt: string): void {
    console.log(this.listeC);
    this.listeC = this.circonscription.filter( (Newlistes) => {
      if ( Newlistes.nom === ctxt ) {
        console.log(Newlistes);
        return this.listeC = Newlistes;
    }
  });
}

  DetailsPage(listeC) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          'id_Cc' : listeC.id,
          'nomCc' : listeC.nom,
          'NombreSiegesCc' : listeC.NombreSiege,
          'NombreListesCc' : listeC.NombreListes,
          'Vote' : listeC.Votes,
          'conscription_id' : listeC.image
        }
      }

      this.router.navigate(['/detail-circonscription'], navigationExtras);
    }

}
