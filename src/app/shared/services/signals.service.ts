import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  public configSidebarOpen = signal(false)
  public sidebarOpen = signal(false)
  public themeIsDark = signal(false)

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
