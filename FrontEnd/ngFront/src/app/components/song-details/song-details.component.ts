import { Component, OnInit } from '@angular/core';
import { SongInfoComponent } from '../song-info/song-info.component';
import { SongQueueComponent } from '../song-queue/song-queue.component';
@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
