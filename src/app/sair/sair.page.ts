import { Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import {AuthenticateService} from '../services/authentication.service';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage {

  nota: number; 

  constructor(public alertCtrl: AlertController, public service:ServicesService, public NavCtlr:NavController,  private authService: AuthenticateService ) {}
    
       

    async showConfirm (n) {
     this.nota = n;

     console.log(this.nota); 
    let pesquisadeopiniao = {nota: this.nota};
    this.service.create_novapesquisa(pesquisadeopiniao).then(resp=>{
    
    this.nota = 0;

    console.log (resp);

    })
    
    
    const confirm = await this.alertCtrl.create({
      
      header: 'Pesquisa de opinião',
      subHeader: 'Ao clicar no botão abaixo, sua opinião será enviada e o aplicativo será fechado.',
      message:'Deseja sair?',

      buttons: [
    {
      
      text:'sim',
      handler: () => {
        console.log ('Agree clicked');

        this.authService.logoutUser()
    
        this.NavCtlr.navigateForward ('/login');
    
     },
   
  },
    {
      text: 'não',
      handler: () => {
        console.log ('Disagree clicked');
      }
    }
  ]
});

  confirm.present ( );
  }
}
