import {Component} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {HttpClient} from '@angular/common/http';
import { ServicesService} from '../services.service';
import {ListPage} from '../list/list.page';
import {ComprasPage} from '../compras/compras.page';
import { Router } from '@angular/router';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController, NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})

export class QRCodePage {
  qrData = null;
  produto: string='';
  quantidade = 0;
  valor = 0;
  createdcode = null;
  scannedcode = null;
  data;
  encodText: string = '';
  encodeData: any={};
  datadacompra: string='';  
  itemcomprado: number = 0;
  btn: any;
  controle = 0;

  constructor(private Scanner: BarcodeScanner, public http:HttpClient, public crudService:ServicesService, public compras:ComprasPage,
    public router: Router,
    public rota: ActivatedRoute) {
 
  }

  ngOnInit(){
  this.itemcomprado = parseInt(this.rota.snapshot.paramMap.get("quanta"));   
  console.log (this.itemcomprado)
  }

  createCode(n){
    
    
    {
      this.crudService.read_novacompra('').subscribe(data => {
   
        this.qrData = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            produto: e.payload.doc.data()['produto'],
            quantidade: e.payload.doc.data()['quantidade'],
            valor: e.payload.doc.data()['valor'],
            datadacompra: e.payload.doc.data()['datadacompra']
          };
        })

        this.btn = (n-1) + this.controle;

          this.controle = this.controle + 1;

          if (this.btn<=this.itemcomprado){
            
            this.encodeData = [
            this.qrData[this.btn].id, 
            this.qrData[this.btn].produto,
            this.qrData[this.btn].quantidade,
            this.qrData[this.btn].valor,
            this.qrData[this.btn].datadacompra],
 
          console.log(this.controle);
          console.log(n);
          console.log(this.btn);
          }
          else {
          console.log ("Não existem mais item comprados")

          }

      console.log(this.encodeData[0]);
          
       
      });

    }
  
  }  
  
}
