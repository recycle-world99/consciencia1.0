import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  authState = new BehaviorSubject(false);
  
  
  constructor() { }

  //registrar o usuario//
  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
  //logar o usuario//
  loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err)),
        this.authState.next(true)
    })
   }
  //deslogar o usuario//
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           console.log("LOG Out");
           resolve();
         }).catch((error) => {
           reject();
         });
         this.authState.next(false)
       }
     })
   }
  //detalhes do usuario//
  userDetails(){
    return firebase.auth().currentUser;
  }

  isAuthenticated() {
    return this.authState;
  }

 
}

