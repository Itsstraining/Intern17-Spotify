import { Component, OnInit, Input } from '@angular/core';
import { PlaySongServiceService } from '../../playSong_service/play-song-service.service';
@Component({
  selector: 'app-music-controller',
  templateUrl: './music-controller.component.html',
  styleUrls: ['./music-controller.component.scss'],
})
export class MusicControllerComponent implements OnInit {

  constructor( public _playSongService: PlaySongServiceService) {
  }

  ngOnInit() {
  }

}
