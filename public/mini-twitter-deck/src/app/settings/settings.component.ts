import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mtd-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() selectedColor: string;
  @Output() selectedColorChange = new EventEmitter();

  @Input() closedSettings: boolean;
  @Output() closedSettingsChange = new EventEmitter();

  colorList = COLOR_CHOICES;

  constructor() { }

  ngOnInit() {
  }

  onSelectColor(color: any) {
    this.selectedColor = color;
    this.selectedColorChange.emit(this.selectedColor);
  }

  close() {
    this.closedSettings = !this.closedSettings;
    this.closedSettingsChange.emit(this.closedSettings);
  }
}

const COLOR_CHOICES = [
  {
    name: 'Amaranth',
    value: 'amaranth'
  },
  {
    name: 'Curious Blue',
    value: 'curious-blue'
  },
  {
    name: 'Lightning Yellow',
    value: 'lightning-yellow'
  },
  {
    name: 'Mountain Meadow',
    value: 'mountain-meadow'
  },
];
