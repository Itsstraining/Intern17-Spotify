import { Component, OnInit } from '@angular/core';
// import { MusicOverviewComponent } from '../music-overview/music-overview.component';
@Component({
  selector: 'app-section-divider',
  templateUrl: './section-divider.component.html',
  styleUrls: ['./section-divider.component.scss']
})
export class SectionDividerComponent implements OnInit {

  constructor() { }

  items = ['Section1','Section2'];
  ngOnInit() {
  }

}
