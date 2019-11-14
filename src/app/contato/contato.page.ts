import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import { ServicesService} from '../services.service';
 import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  nome: string;
  email: string;
  senha: string;
  data:number;
  endereco:string;

  constructor (public service: ServicesService, public NavCtlr: NavController) { }

  ngOnInit() {


  }
    criarRegistro() {
      console.log("Início");
      
      let record = {};
      record['nome'] = this.nome;
      record['data'] = this.data;
      record['endereco'] = this.endereco;
      record['email'] = this.email;
      record['senha'] = this.senha;
      
      
      this.service.create_novocontato(record).then(resp =>{
        this.nome = "";
        this.data = 0;
        this.endereco = "";
        this.email = "";
        this.senha = "";
        
       
        console.log(resp);
        this.NavCtlr.navigateForward ('/login');
      })
        .catch(error => {
          console.log(error);
          
      });
      
  }

}

