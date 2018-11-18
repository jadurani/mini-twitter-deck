import { Injectable } from '@angular/core';
import { ThemeColor, DEFAULT_THEME_COLOR } from '@shared/models/theme-color';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getSelectedThemeColor(): ThemeColor {
    if (!localStorage.getItem('selectedThemeColorName')) {
      return DEFAULT_THEME_COLOR;
    }

    return {
      name: localStorage.getItem('selectedThemeColorName'),
      value: localStorage.getItem('selectedThemeColorValue')
    };
  }

  setSelectedThemeColor(themeColor) {
    localStorage.setItem('selectedThemeColorName', themeColor.name);
    localStorage.setItem('selectedThemeColorValue', themeColor.value);
  }
}
