import { Component, enableProdMode } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { EmailValidator } from '@angular/forms';
import {AuthenticateService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  logado:any;
  user: any;
  afAuth: any;
  ngxQrcode2 =  ' https://www.npmjs.com/package/ngx-qrcode2 ' ;
  techiediaries =  ' https://www.npmjs.com/~techiediaries ' ;
  letsboot =  ' https://www.letsboot.com/ ' ;



  public paginaPrincipal = [
  {
      title: 'login',
      url: '/login',
      icon: 'log-in'
      },
  ]

  public appPages = [   
    
    {
      title: 'login',
      url: '/login',
      icon: 'log-in',
      },
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title:'Meus Dados',
      url:'/contato',
      icon:'contact',
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
  router: any;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    private authService: AuthenticateService
  ) {
    //enableProdMode();
    
    this.initializeApp();

  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    /*this.logado = this.authService.userDetails().emailVerified*/

    this.authService.authState.subscribe(state => {
      if (state == true) {
        this.paginaPrincipal.length = 0;
        /*this.router.navigate(['dashboard']);*/
      } else {
        this.paginaPrincipal.length = 1;
        /*this.router.navigate(['login']);*/
      }
      console.log(state)
    });

    /*if(this.logado === false){
      this.paginaPrincipal.length = 0;
    } else{
      this.paginaPrincipal.length = 1;
    }*/
  }

}
