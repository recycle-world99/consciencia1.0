import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ListPage } from '../list/list.page';
import { IonicModule } from '@ionic/angular';
import { QRCodePage } from './qrcode.page';
import {ComprasPage} from '../compras/compras.page'; 

const routes: Routes = [
  {
    path: '',
    component: QRCodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[ComprasPage, DatePipe, ListPage],
  declarations: [QRCodePage]
})
export class QrcodePageModule {}
