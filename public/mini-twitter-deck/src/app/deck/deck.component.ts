import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtd-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  columnSettings = {
    screenName: 'makeschool',
    rowCount: 30,
  };

  constructor() { }

  ngOnInit() {
  }

}
