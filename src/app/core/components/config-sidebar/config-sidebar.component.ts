import { Component, inject } from '@angular/core';
import * as signal from '../../../shared/services/signals.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-config-sidebar',
  imports: [
    CommonModule
  ],
  templateUrl: './config-sidebar.component.html',
  styleUrl: './config-sidebar.component.scss'
})
export class ConfigSidebarComponent {

  public readonly signal$ = inject(signal.SignalsService)

}
