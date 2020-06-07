import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResCirModalPage } from './res-cir-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ResCirModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResCirModalPage]
})
export class ResCirModalPageModule {}
