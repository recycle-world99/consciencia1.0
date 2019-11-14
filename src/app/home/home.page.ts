import { Component } from '@angular/core';

import {ServicesService} from '../services.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  produto: string  
  quantidade: number
  valor:number 

  constructor( public service: ServicesService ) {}

  criarRegistro (){
   let mercadoria = {};
   mercadoria ['produto'] = this.produto;
   mercadoria ['quantidade'] = this.quantidade;
   mercadoria ['valor'] = this.valor;
   
   this.service.create_novamercadora(mercadoria).then(resp=>{
  
   this.produto = ""; 
   this.valor = 0;
   this.quantidade = 0;
  
   console.log(resp);


   })

  }
}
