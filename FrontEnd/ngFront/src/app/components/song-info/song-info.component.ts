import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../getInfo_service/get-info.service';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit {

  constructor(public _getInfoService: GetInfoService) { 
  }

  ngOnInit() {
  }

}
