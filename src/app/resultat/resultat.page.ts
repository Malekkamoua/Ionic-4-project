import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss'],
})

export class ResultatPage implements OnInit {

  resultatIndependant;
  listeResultat;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

        // Resultat Independant
        this.apiService.getResultatCInd().subscribe( (data) => {
          this.resultatIndependant = data;
          console.log('Resultat independant : ', this.resultatIndependant);
          console.log(this.resultatIndependant);
        });
  }

}
