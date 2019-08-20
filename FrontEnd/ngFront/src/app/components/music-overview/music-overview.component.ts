import { Component, OnInit, Input } from '@angular/core';
import { GetInfoService } from '../../getInfo_service/get-info.service';
import { PlaySongServiceService } from '../../playSong_service/play-song-service.service'
@Component({
  selector: 'app-music-overview',
  templateUrl: './music-overview.component.html',
  styleUrls: ['./music-overview.component.scss']
})
export class MusicOverviewComponent implements OnInit {

  @Input() sec: string;
  
  constructor(public _getInfoService: GetInfoService, public _playSongService: PlaySongServiceService ) { }

  songInfo = [];

  ngOnInit() {
    this.songInfo = this._getInfoService.getSongInfo();
  }

}
