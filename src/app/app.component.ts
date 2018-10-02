import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtlen: number = 0;
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
  onKey(e) {
    if (e.key === "Escape") {
      e.target.value = '';
    }
    console.log(e);
    var value = e.target.value;
    this.txtlen = value.length;
  }
}
