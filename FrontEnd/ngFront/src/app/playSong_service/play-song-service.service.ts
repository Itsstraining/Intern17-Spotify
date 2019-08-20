import { Injectable } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { SongService } from '../song.service';

@Injectable({
  providedIn: 'root'
})
export class PlaySongServiceService {

  constructor(private _songService: SongService) {
  }

  public msaapDisplayTitle = null;
  public msaapDisplayPlayList = null;
  public msaapPageSizeOptions = null;
  public msaapDisplayVolumeControls = null;
  public msaapPlaylist: Track[] = [];

  declaration = [this.msaapDisplayTitle, this.msaapDisplayPlayList, this.msaapPageSizeOptions, this.msaapDisplayVolumeControls, this.msaapPlaylist];

  public isAvailable() {
    return this.msaapDisplayTitle != null && this.msaapDisplayPlayList != null && this.msaapPageSizeOptions != null && this.msaapPlaylist.length != 0;
  }

  public playMusic(id) {
    this.msaapDisplayTitle = true;
    this.msaapDisplayPlayList = true;
    this.msaapPageSizeOptions = [3];
    this.msaapDisplayVolumeControls = true;
    // Material Style Advance Audio Player Playlist
    console.log(id);
    this.msaapPlaylist = this._songService.getMusic(id);
  }
}
