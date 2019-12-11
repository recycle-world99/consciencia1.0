import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServicesService} from '../services.service';
import {ToastController} from '@ionic/angular';
import {Time, getLocaleDateFormat, DatePipe } from '@angular/common';
import {ListPage} from '../list/list.page';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController, NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-compras',
  templateUrl: 'compras.page.html',
  styleUrls: ['compras.page.scss'],
})
export class ComprasPage {
 
  item: number = 0;
  produto: string  
  quantidade: number
  valor:number 
  total:number
  now:number
  today:Date
  sacola = [];
  compraatual;
  compraanterior;
  compra = {};
  listaMenu 
  i:number = 0
  n:any;
  constructor( public service: ServicesService, private loadingController:LoadingController, private NavCtlr:NavController,
               public datePipe: DatePipe, public lista: ListPage ) {  }


  ngOnInit() {
    
    this.listaMenu = this.lista.prods;
    console.log(this.listaMenu);
    let sacola = [];
    
  }

   adicionarItem(){
   console.log("teste feio com sucesso"); 
   
   if(this.item>=0){ 
    
    let compraatual: any;
    let mercadoria = {};      
    mercadoria ['produto'] = this.produto;
    mercadoria ['quantidade'] = this.quantidade;
    mercadoria ['valor'] = this.valor; 

    this.today = new Date();
    console.log(this.datePipe.transform(this.today, "dd/MM/yyyy hh:mm:ss a"));
    mercadoria ['datadacompra'] = this.datePipe.transform(this.today, "dd/MM/yyyy hh:mm:ss a");
    
    compraatual = mercadoria;
    console.log (compraatual);
    this.sacola.push (compraatual);  
    console.log(this.sacola);
  
   this.item = this.item + 1;
   console.log (this.item)
     }
  }

    removerItem(){
    if(this.item>0){
  
    this.sacola.pop();
    console.log(this.sacola);

    this.item = this.item - 1;
    console.log (this.item);
    }
  }
  criarRegistro (){
    console.log ("gravado com sucesso");
    console.log( this.sacola);
    console.log( this.item);
     let i; 

     for (i=0; i<this.sacola.length; i++){
      console.log(this.sacola[i].produto);

      let compra = {}

      compra ['produto'] = this.sacola[i].produto;     
      compra ['quantidade'] = this.sacola[i].quantidade;    
      compra ['valor'] = this.sacola[i].valor;      
      compra ['datadacompra'] = this.sacola[i].datadacompra;
      
      const qtd = this.item;  
      console.log (compra)

      this.service.create_novamercadora(compra).then(async resp=>{
   
       this.produto = ""; 
       this.valor = 0;
       this.quantidade = 0;
       this.today;
       
       for (i=0; i<this.item; i++){  
       this.sacola.pop()
       console.log (this.sacola);
       }

       if (this.item>0) {
         this.NavCtlr.navigateForward (['/qrcode',{quanta: qtd}]);
         const loading = await this.loadingController.create({
         spinner: null,
         duration: 3500,
         message: 'Aguarde um instante, estamos processando a sua compra...',
         translucent: true,
         cssClass: 'custom-class custom-loading'
       });
       return await loading.present();
       }  

       });
 
     }
     
  }

  checkValue(event){ 
    let busca = event.detail.value;

    let encontrado = false;
    for (let m of this.listaMenu){
      for (let s of m.subProds){
        if (s.titulo == busca){

          this.valor = s.valor;
          encontrado = true;
        }
        if (encontrado == true){break;}
      }

      if (encontrado == true){break;}
      
    }
    
  }

}
