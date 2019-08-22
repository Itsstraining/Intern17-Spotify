import { Component } from '@angular/core';
import { PlaySongServiceService } from './playSong_service/play-song-service.service';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (public _playSongService: PlaySongServiceService ) {
  }

  title = 'ngFront';
 
}   
