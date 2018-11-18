import { Component } from '@angular/core';
import { ThemeColor } from '@shared/models/theme-color';
import { SettingsService } from '@shared/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-twitter-deck';
}
