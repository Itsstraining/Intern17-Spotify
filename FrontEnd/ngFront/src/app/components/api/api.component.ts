import { Component, Output, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent {

  @Output() eventTest = new EventEmitter();

  result = '';
  name = ['https://vnso-zn-10-tf-mp3-s1-zmp3.zadn.vn/e5632269f42d1d73443c/3769102702777969994?authen=exp=1565811568~acl=/e5632269f42d1d73443c/*~hmac=b1257977b260e2268b0a038f25401606&filename=Ngam-Hoa-Le-Roi-Chau-Khai-Phong.mp3', '1'];

  constructor(private client: HttpClient) {
    this.getMusic();
    this.triggerEvent();
  }

  getMusic() {
    // this.client.get(`http://localhost:3000/${this.name[1]}`, {}).subscribe(value => {
    //   this.result = `${value['rest']}`;
    // });
      this.result = this.name[0];
  }

  triggerEvent() {
    this.eventTest.emit(this.result);
  }
}
