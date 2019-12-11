import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
/*import {ToastController} from '@ionic/angular';*/

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import {AuthenticateService} from './services/authentication.service';
import {AngularFireAuthModule} from '@angular/Fire/auth';
import{AngularFireModule} from '@angular/fire';
import{ AngularFireDatabaseModule} from '@angular/fire/database';
import{ AngularFirestoreModule} from '@angular/fire/firestore';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {NgxQRCodeModule} from 'ngx-qrcode2';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import {QRCodeModule} from 'angular2-qrcode'*/
import * as firebase from 'firebase';

//firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    /*ToastController,*/
    IonicModule.forRoot(),
    NgxQRCodeModule,
    /*QRCodeModule,*/
    AppRoutingModule, 
    /*AngularFireModule.initializeApp(environment.firebase),*/
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDgqdIjlRKvKE-on8kg8IfMkVtRRl8-plc",
      authDomain: "meumercado-a4829.firebaseapp.com",
      databaseURL: "https://meumercado-a4829.firebaseio.com",
      projectId: "meumercado-a4829",
      storageBucket: "meumercado-a4829.appspot.com",
      messagingSenderId: "621321746611",
      appId: "1:621321746611:web:b05433c26ce1776413d8c6"
    }),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule, 
    FormsModule, ReactiveFormsModule
  ],

    providers: [
    StatusBar,    
    SplashScreen,
    AuthenticateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}