import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { PlaySongServiceService } from '../../playSong_service/play-song-service.service';
@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss']
})
export class SearchNavComponent implements OnInit {

 
  constructor(public afAuth: AngularFireAuth, public router: Router, public _playSongService: PlaySongServiceService) {
    this.afAuth.user.subscribe((usr) => {
      this.name = usr.displayName
      this.img = usr.photoURL
      this.email=usr.email
    })
  }
  name = ""
  img = ""
  email = ""
  value=""
  
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
