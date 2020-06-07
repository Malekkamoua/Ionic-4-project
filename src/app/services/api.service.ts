import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getCirconscription() {
    return this.httpClient.get('https://legislative-2019.tn/apiCc');
  }

  public getListes() {
    return this.httpClient.get('https://legislative-2019.tn/apiListeValide');
  }


  public getResultatTab() {
    return this.httpClient.get('https://legislative-2019.tn/apiResAllAffichage');
  }


  public getResultatNonPartis() {
    return this.httpClient.get('https://legislative-2019.tn/apiListeNonPartisane');
  }
 
  // public getListesIndep() {
  //   return this.httpClient.get('https://legislative-2019.tn/apiListe/i');
  // }

  // public getListesCoa() {
  //   return this.httpClient.get('https://legislative-2019.tn/apiListe/c');
  // }

  public getTotalInscrit() {
    return this.httpClient.get('https://legislative-2019.tn/apiSendNumber');
  }

  public getResultatCoa() {
    return this.httpClient.get('https://legislative-2019.tn/apiResultatCoalition');
  }

  public getResultatCInd() {
    return this.httpClient.get('https://legislative-2019.tn/apiResultatIndependant');
  }

  public getResultatPartis() {
    return this.httpClient.get('https://legislative-2019.tn/apiresParti');
  }
  public getListesParCir(circonscription) {
    return this.httpClient.get('https://legislative-2019.tn/apiListeParCir/' + circonscription);
  }

}
  
