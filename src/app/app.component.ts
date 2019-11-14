import { Component, enableProdMode } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  ngxQrcode2 =  ' https://www.npmjs.com/package/ngx-qrcode2 ' ;
  techiediaries =  ' https://www.npmjs.com/~techiediaries ' ;
  letsboot =  ' https://www.letsboot.com/ ' ;

  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'Log-in'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title:'Meus Dados',
      url:'/contato',
      icon:'contact'
    },
    {
      title: 'Produtos Reciclaveis',
      url: '/list',
      icon: 'basket'
    },
    {
      title:'Trocas de Produtos',
      url: '/compras',
      icon: 'cart'
    },
    {
      title: 'QR Code',
      url: '/qrcode',
      icon: 'qr-scanner'
    },
    {
      title: 'Sair',
      url: '/sair',
      icon: 'power'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    //enableProdMode();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
