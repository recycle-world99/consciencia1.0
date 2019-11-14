import {Component} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {HttpClient} from '@angular/common/http';
import { ServicesService} from '../services.service';

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
 

  constructor(private Scanner: BarcodeScanner, public http:HttpClient, public crudService:ServicesService) {
 
  }

  
  createCode(){
    
    

    /*this.encodeData = this.encodText;*/
    
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
       /* this.encodeData=[];*/
        this.encodeData = [
          this.qrData[0].id, 
          this.qrData[0].produto,
          this.qrData[0].quantidade,
          this.qrData[0].valor,
          this.qrData[0].datadacompra],
        console.log(this.encodeData[0]);
       
      });

    }
  
  }
   

  
}
