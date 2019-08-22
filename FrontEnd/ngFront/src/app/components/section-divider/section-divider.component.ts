import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
// import { MusicOverviewComponent } from '../music-overview/music-overview.component';
@Component({
  selector: 'app-section-divider',
  templateUrl: './section-divider.component.html',
  styleUrls: ['./section-divider.component.scss']
})
export class SectionDividerComponent implements OnInit {

  constructor() { }

  //Can create different type of section 
  public sectionsByGenre = ['pop','jazz'];
  ngOnInit() {
  }

}
