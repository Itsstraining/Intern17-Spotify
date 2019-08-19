import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../getInfo_service/get-info.service';
import { PlaySongServiceService } from '../../playSong_service/play-song-service.service'
@Component({
  selector: 'app-music-overview',
  templateUrl: './music-overview.component.html',
  styleUrls: ['./music-overview.component.scss']
})
export class MusicOverviewComponent implements OnInit {

  constructor(public _getInfoService: GetInfoService, public _playSongService: PlaySongServiceService ) { }

  songInfo = [];
  numberOfMusic = [0,1,2];
  
  ngOnInit() {
    this.songInfo = this._getInfoService.getSongInfo();
  }

}
