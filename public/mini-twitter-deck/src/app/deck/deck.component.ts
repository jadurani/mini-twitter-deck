import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtd-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  columnList = [
    {
      screenName: 'makeschool',
      rowCount: 30,
    },
    {
      screenName: 'ycombinator',
      rowCount: 30,
    },
    {
      screenName: 'newsycombinator',
      rowCount: 30,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
