import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'client', loadChildren: './client/client.module#ClientPageModule' },
  { path: 'resultat', loadChildren: './resultat/resultat.module#ResultatPageModule' },
  { path: 'liste', loadChildren: './liste/liste.module#ListePageModule' },
  { path: 'liste1', loadChildren: './liste1/liste1.module#Liste1PageModule' },
  { path: 'composant', loadChildren: './composant/composant.module#ComposantPageModule'},
  { path: 'resultat1', loadChildren: './resultat1/resultat1.module#Resultat1PageModule' },
  { path: 'resultat2', loadChildren: './resultat2/resultat2.module#Resultat2PageModule' },
  { path: 'detail-circonscription', loadChildren: './detail-circonscription/detail-circonscription.module#DetailCirconscriptionPageModule' },
  { path: 'detail-liste', loadChildren: './detail-liste/detail-liste.module#DetailListePageModule' },
  { path: 'res-cir-modal', loadChildren: './res-cir-modal/res-cir-modal.module#ResCirModalPageModule' },
  { path: 'manif-modal', loadChildren: './manif-modal/manif-modal.module#ManifModalPageModule' },
  { path: 'membres-modal', loadChildren: './membres-modal/membres-modal.module#MembresModalPageModule' },
  { path: 'res-liste-modal', loadChildren: './res-liste-modal/res-liste-modal.module#ResListeModalPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
