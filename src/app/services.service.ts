import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public firestore:AngularFirestore) { }
 
  create_novocontato(record){
   
    //lembre-se, deverá criar um novo método//
    console.log("Cadastro criado com sucesso!");

    return this.firestore.collection('cadastros').add(record);
  }

  create_novamercadora(mercadoria){
   
    console.log("Compras feita com sucesso!")
   
    return this.firestore.collection('compras').add(mercadoria);
  }
 
  create_novapesquisa(pesquisadeopiniao){
   
    console.log("Pesquisa de Opinião criada com sucesso!")
   
    return this.firestore.collection('pesquisas').add(pesquisadeopiniao);
  }

  read_novocontato(record) {
    return this.firestore.collection('cadastro').snapshotChanges();
  }

  read_novacompra(mercadoria){
    return this.firestore.collection('compras').snapshotChanges();
  }
  
 /*- update_contato(recordID,record){
    this.firestore.doc('cadastros/' + recordID).update(record);  
  }
  delete_contato(record_id){
    this.firestore.doc('cadastros/'+ record_id).delete ()  
  }*/  

}
