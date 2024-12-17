import { Component, inject } from '@angular/core';
import * as sharedComponents from '../../../shared/components'
import * as signal from '../../../shared/services/signals.service'

@Component({
  selector: 'app-header',
  imports: [
    sharedComponents.SvgIconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public readonly signal$ = inject(signal.SignalsService)
  
  public changeStateSidebar() {
    this.signal$.changeStateSidebarOpen(!this.signal$.sidebarOpen())
    console.log('sidebar is open?:', this.signal$.sidebarOpen());
  }

  public changeThemeState() {
    this.signal$.changeStateTheme(!this.signal$.themeIsDark())
    localStorage.setItem('darkMode', this.signal$.themeIsDark() ? 'yes' : 'no')
    document.documentElement.classList.toggle('dark',
      localStorage.getItem('darkMode') === 'yes' || (!(localStorage.getItem('darkMode')) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }

  public changeStateConfigSidebarOpen() {
    this.signal$.changeStateConfigSidebarOpen(!this.signal$.configSidebarOpen())
    console.log('sidebar settings is open?:', this.signal$.configSidebarOpen());
  }
}
