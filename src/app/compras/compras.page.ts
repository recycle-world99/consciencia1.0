import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServicesService} from '../services.service';
import {ToastController} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { Time, getLocaleDateFormat, DatePipe } from '@angular/common';
import { ListPage} from '../list/list.page';

@Component({
  selector: 'app-compras',
  templateUrl: 'compras.page.html',
  styleUrls: ['compras.page.scss'],
})
export class ComprasPage {
 
  produto: string  
  quantidade: number
  valor:number 
  total:number
  now:number
  today:Date

  listaMenu 
   
  constructor( public service: ServicesService, public LoadingCtrl:LoadingController, public NavCtlr:NavController,
               public datePipe: DatePipe, public lista: ListPage ) {  }


  ngOnInit() {
    
    this.listaMenu = this.lista.prods;
    console.log(this.listaMenu);
  }

  adicionarItem(){

  }
  removerItem(){
    
  }
  criarRegistro (){
     console.log("teste");
     let mercadoria = {};
     mercadoria ['produto'] = this.produto;
     mercadoria ['quantidade'] = this.quantidade;
     mercadoria ['valor'] = this.valor;
     this.today = new Date();
     console.log(this.datePipe.transform(this.today, "dd/MM/yyyy"));
//     console.log(this.today.getDate);
//     console.log(this.today.getMonth);
//     console.log(this.today.getFullYear);
     

     mercadoria ['datadacompra'] = this.datePipe.transform(this.today, "dd/MM/yyyy");

     /*mercadoria ['total'] = this.total;*/

     /*mercadoria ['total'] = this.total;*/
     
     this.service.create_novamercadora(mercadoria).then(async resp=>{
  
     this.produto = ""; 
     this.valor = 0;
     this.quantidade = 0;
     this.today;
     /*this.total = 0;*/

   
      /*if (this.valor>0&&this.quantidade>0){
       this.total = this.quantidade * this.valor
       console.log(this.total)  
      }
      else
      {
      console.log("verifique o cálculo feito!")
      }*/
    
    }); 
  
  }

}