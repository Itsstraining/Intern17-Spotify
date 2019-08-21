import { Injectable } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { SongService } from '../song.service';
import { GetInfoService } from '../getInfo_service/get-info.service';
@Injectable({
  providedIn: 'root'
})
export class PlaySongServiceService {

  constructor(private _songService: SongService, public _getInfoService: GetInfoService) {
  }

  public msaapDisplayTitle = null;
  public msaapDisplayPlayList = null;
  public msaapPageSizeOptions = null;
  public msaapDisplayVolumeControls = null;
  public msaapPlaylist: Track[] = [];
  song = {
    title: '',
    link: '',
  };
  declaration = [this.msaapDisplayTitle, this.msaapDisplayPlayList, this.msaapPageSizeOptions, this.msaapDisplayVolumeControls, this.msaapPlaylist];

  public isAvailable() {
    return this.msaapDisplayTitle != null && this.msaapDisplayPlayList != null && this.msaapPageSizeOptions != null && this.msaapPlaylist.length != 0;
  }

  public playMusic(index) {
    console.log("TCL: PlaySongServiceService -> playMusic -> id", index)
    this.msaapDisplayTitle = true;
    this.msaapDisplayPlayList = false;
    this.msaapPageSizeOptions = [3];
    this.msaapDisplayVolumeControls = true;
    // Material Style Advance Audio Player Playlist
    this.song.title = this._getInfoService.getSong(index).songName;
    this.song.link = this._getInfoService.getSong(index).url;
    console.log("TCL: PlaySongServiceService -> playMusic -> this.song", this.song)
    
    this.msaapPlaylist.push(this.song);
  }
}
