import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  link_app: string;
  eventHandle(value) {
    this.link_app = value;
    console.log(this.link_app);
  }

  title = 'ngFront';
}
