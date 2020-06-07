import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResListeModalPage } from './res-liste-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ResListeModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResListeModalPage]
})
export class ResListeModalPageModule {}
