import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthenticateService} from '../services/authentication.service';
import { ContatoPage } from '../contato/contato.page';
import { ServicesService} from '../services.service';
import {NavController} from '@ionic/angular';
import {LoadingController, ToastController} from '@ionic/angular'; 
import * as firebase from 'firebase';
/*import {Route} from '@ionic/angular'*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
 
  validation_messages = {
   'email': [
     { type: 'required', message: 'Email é requerido.' },
     { type: 'pattern', message: 'Entre com um e-mail válido.' }
   ],
   'password': [
     { type: 'required', message: 'Senha Requerida.' },
     { type: 'minlength', message: 'A senha deverá ter acimda de 5 caracteres.' }
   ]
 };
 
  login: string;
  senha: string;
  record: any;
  user
  logado: any;

  constructor(
    private Angularfirestorne:AngularFirestore, private service:ServicesService, 
    private NavCtrl:NavController, private loadingController: LoadingController,
    private toastController: ToastController, private authService: AuthenticateService,
    private formBuilder: FormBuilder)  { }
  
    ngOnInit(){
      this.validations_form = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.required
        ])),
      });

    }

    async go(value) {

      {
        this.authService.loginUser(value)
         .then(res => {
           console.log(res);
           this.successMessage = res.Message;
         }, err => {
           console.log(err);
           this.errorMessage = err.Message;
         })
      }
    
      this.logado = this.authService.userDetails().emailVerified
      console.log (this.logado)
      
        
      console.log("1");
      
    
      if (this.logado === false) {this.NavCtrl.navigateForward ('/home');
        const loading = await this.loadingController.create({
          spinner: null,
          duration: 2500,
          message: 'Por favor, Aguarde...',
          translucent: true,
          cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
      }  
        
      else {
          const toast = await this.toastController.create({
          message: 'Senha ou e-mail estão errados. Por favor, verifique os dados digitados',
          duration: 3000
        
          });
          toast.present();
      }
        
    }
  
    goRegistro(){
      this.NavCtrl.navigateForward('/registro');
    }

  
         
  }