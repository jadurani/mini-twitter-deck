import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-twitter-deck';
  closed = true;
  themeColor = {
    name: 'Amaranth',
    value: 'amaranth',
  };
}
