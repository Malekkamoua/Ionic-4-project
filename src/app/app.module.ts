import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ResCirModalPage } from './res-cir-modal/res-cir-modal.page';
import { ManifModalPage } from './manif-modal/manif-modal.page';
import { MembresModalPage } from './membres-modal/membres-modal.page';
import { ResListeModalPage } from './res-liste-modal/res-liste-modal.page';


@NgModule({
  declarations: [AppComponent, ResCirModalPage, ManifModalPage, MembresModalPage, ResListeModalPage],
  entryComponents: [ResCirModalPage, ManifModalPage, MembresModalPage, ResListeModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule ],

providers: [
    StatusBar,
    SplashScreen,
    ReactiveFormsModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
