import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';   

@Component({
  selector: 'app-music-controller',
  templateUrl: './music-controller.component.html',
  styleUrls: ['./music-controller.component.scss']
})
export class MusicControllerComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Hahahahahah',
      link: 'Song-Gio-Jack-K-ICM.mp3'
    },
    // {
    //   title: 'Audio Two Title',
    //   link: 'Link to Audio Two URL'
    // },
    // {
    //   title: 'Audio Three Title',
    //   link: 'Link to Audio Three URL'
    // },
  ];

  msbapDisplayTitle = true;
  constructor() { }

  ngOnInit() {
  }

}
