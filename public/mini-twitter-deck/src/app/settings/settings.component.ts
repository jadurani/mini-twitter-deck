import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtd-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  close() {
    console.log({close: 'rawr'});
  }
}
