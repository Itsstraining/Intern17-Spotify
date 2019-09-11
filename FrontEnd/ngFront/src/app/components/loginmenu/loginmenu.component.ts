import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginmenu',
  templateUrl: './loginmenu.component.html',
  styleUrls: ['./loginmenu.component.scss']
})
export class LoginmenuComponent implements OnInit {

 

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.user.subscribe((usr) => {
      this.name = usr.displayName,
      this.img = usr.photoURL,
      this.email=usr.email
      
    })
  }
  name = ""
  img = ""
  email = ""
  account_circle = "account_circle"
 
  
  async logout() {
    await this.afAuth.auth.signOut();
   
  }
  async login(){
    const provider = new auth.GoogleAuthProvider();
    const credentials= await this.afAuth.auth.signInWithPopup(provider)
    console.log(credentials);
    const user = this.afAuth.auth.currentUser
    console.log(user);
    
  }
  ngOnInit() {
  }

}
