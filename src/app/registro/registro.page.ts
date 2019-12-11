import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthenticateService} from '../services/authentication.service';
import { ContatoPage } from '../contato/contato.page';
import { ServicesService} from '../services.service';
import {NavController} from '@ionic/angular';
import {LoadingController, ToastController} from '@ionic/angular'; 
import * as firebase from 'firebase';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

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
  logado: boolean;

  constructor(
    private Angularfirestorne:AngularFirestore, private service:ServicesService, 
    private NavCtrl:NavController, private loadingController: LoadingController,
    private toastController: ToastController, private authService: AuthenticateService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
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

  async cadastro(value) {

    { 
      this.authService.registerUser(value)
       .then(res => {
         console.log(res);
         this.successMessage = res.message;
       }, err => {
         console.log(err);
         this.errorMessage = err.message;
       })
    }

      const toast = await this.toastController.create({
      message: this.errorMessage || this.successMessage,
      duration: 5000
      });
      toast.present();
     
    console.log("2");
  
    if (this.successMessage == null){ const toast = await this.toastController.create({
    message: 'Seus dados já estão cadastrado no sistema. Por favor, efetue o acesso.',
    duration: 2000

    });
    toast.present();
    }
    else {
      this.NavCtrl.navigateForward ('/contato');
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 3000,
        message: 'Por favor, Aguarde...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    
    }
  }


}
