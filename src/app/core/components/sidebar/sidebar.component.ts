import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import * as signal from '../../../shared/services/signals.service'

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public readonly signal$ = inject(signal.SignalsService)

}
