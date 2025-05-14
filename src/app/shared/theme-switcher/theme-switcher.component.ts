import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css'
})
export class ThemeSwitcherComponent {
  isDarkThemeActive = false;

  onChangeThemeSwitcher( newValue: boolean ): void {
    console.log(newValue);
  }

}
