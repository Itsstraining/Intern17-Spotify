import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { SongService} from '../../song.service';
import { link } from 'fs';
@Component({
  selector: 'app-music-controller',
  templateUrl: './music-controller.component.html',
  styleUrls: ['./music-controller.component.scss'],
})
export class MusicControllerComponent implements OnInit {

  @Input() links: string;

  public msaapDisplayTitle = null;
  public msaapDisplayPlayList = null;
  public msaapPageSizeOptions = null;
  public msaapDisplayVolumeControls = null;
  public msaapPlaylist: Track[] = [];

  isAvailable() {
    return this.msaapDisplayTitle != null && this.msaapDisplayPlayList != null && this.msaapPageSizeOptions != null && this.msaapPlaylist.length != 0;
  }

  public songs: object[];

  playMusic() {
    this.msaapDisplayTitle = true;
    this.msaapDisplayPlayList = false;
    this.msaapPageSizeOptions = [2, 4, 6];
    this.msaapDisplayVolumeControls = true;
    // Material Style Advance Audio Player Playlist
    this.msaapPlaylist = [
      // {
      //   title: '123',
      //   link: this.songs.link,
      // },
      {
        title: '456',
        link: 'https://vnso-zn-16-tf-mp3-s1-zmp3.zadn.vn/27605b1cfa5813064a49/427751192122625476?authen=exp=1565947236~acl=/27605b1cfa5813064a49/*~hmac=77a6a36ab16eb0f2e027eb9e3aa31f81&filename=Happy-New-Year-Be-Thu-Ky.mp3',
      }
    ];
  }


  constructor(private _songService: SongService) {
    this.songs = this._songService.getMusic();
  }

  ngOnInit() {
  }

}
