import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ThemeColor, THEME_COLOR_CHOICES } from '@shared/models/theme-color';
import { SettingsService } from '@shared/services/settings.service';

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

  colorList: Array<ThemeColor>;

  constructor(private settings: SettingsService) {
    this.colorList = THEME_COLOR_CHOICES;
  }

  ngOnInit() {
  }

  onSelectColor(color: any) {
    this.settings.setSelectedThemeColor(color);
    this.selectedColor = color;
    this.selectedColorChange.emit(this.selectedColor);
  }

  close() {
    this.closedSettings = !this.closedSettings;
    this.closedSettingsChange.emit(this.closedSettings);
  }
}

