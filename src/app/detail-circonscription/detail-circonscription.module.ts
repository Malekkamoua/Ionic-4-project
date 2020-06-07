import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailCirconscriptionPage } from './detail-circonscription.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCirconscriptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailCirconscriptionPage]
})
export class DetailCirconscriptionPageModule {}
