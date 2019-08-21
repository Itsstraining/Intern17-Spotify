import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../getInfo_service/get-info.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public _getInfoService: GetInfoService) { }

  ngOnInit() {
  }

}
