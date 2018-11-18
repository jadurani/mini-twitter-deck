import { Component, OnInit, Input } from '@angular/core';
import { ThemeColor } from '@shared/models/theme-color';
import { SettingsService } from '@shared/services/settings.service';

@Component({
  selector: 'mtd-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  closed = true;
  columnList = COLUMN_LIST;
  selectedThemeColor: ThemeColor;

  constructor(private settings: SettingsService) {
    this.selectedThemeColor = this.settings.getSelectedThemeColor();
  }

  ngOnInit() {
  }

}

const COLUMN_LIST = [
  {
    screenName: 'MakeSchool',
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
