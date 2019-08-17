import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-overview',
  templateUrl: './music-overview.component.html',
  styleUrls: ['./music-overview.component.scss']
})
export class MusicOverviewComponent implements OnInit {

  constructor() { }

  numberOfMusic = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  column = 4;
  row = 4;
  ngOnInit() {
  }

}
