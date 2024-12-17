import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  public configSidebarOpen = signal(false)
  public sidebarOpen = signal(false)
  public themeIsDark = signal(false)

  constructor() {
    this.changeStateTheme(localStorage.getItem('darkMode') === 'yes')
    document.documentElement.classList.toggle('dark', localStorage.getItem('darkMode') === 'yes' || (!(localStorage.getItem('darkMode')) && window.matchMedia('(prefers-color-scheme: dark)').matches))
  }

  public changeStateSidebarOpen = (state: boolean) => {
    this.sidebarOpen.set(state)
  }

  public changeStateTheme = (state: boolean) => {
    this.themeIsDark.set(state)
  }

  public changeStateConfigSidebarOpen = (state: boolean) => {
    this.configSidebarOpen.set(state)
  }
}
