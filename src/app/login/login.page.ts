import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import { ContatoPage } from '../contato/contato.page';
import { ServicesService} from '../services.service';
import {NavController} from '@ionic/angular';
import {LoadingController, ToastController} from '@ionic/angular'; 
/*import {Route} from '@ionic/angular'*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  login: string;
  senha: string;
  record: any;
  
  constructor(
    private Angularfirestorne:AngularFirestore, private service:ServicesService, 
    private NavCtrl:NavController, private loadingController: LoadingController,
    private toastController: ToastController)  { }


  async AcessoLogin() {
    
    this.NavCtrl.navigateForward ('/home');
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 2500,
        message: 'Por favor, Aguarde...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    
      
  }

  async CadastroSenha() {
   
      /*let record = {};
      record['login'] = this.login;
      record['senha'] = this.senha;
              
      this.service.create_novocontato(record).then(resp =>{
      this.login = "";
      this.senha = "";
          
      console.log(resp);
          
      })
      .catch(error => {
      console.log(error);
            
      });*/  
  
    if (null){const toast = await this.toastController.create({
    message: 'Seus dados foram salvos com sucesso.',
    duration: 2000

    });
    toast.present();
    }
    else {
      this.NavCtrl.navigateForward ('/contato');
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 2500,
        message: 'Por favor, Aguarde...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    
    }
  }
}

