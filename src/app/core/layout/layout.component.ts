// Angular modules
import { Component, inject } from '@angular/core';
// Core components
import { RouterModule } from '@angular/router';
import * as COMPONENTS_CORE from '../../core/components'
import * as signal from '../../shared/services/signals.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterModule,
    COMPONENTS_CORE.HeaderComponent,
    COMPONENTS_CORE.SidebarComponent,
    COMPONENTS_CORE.ConfigSidebarComponent,
    COMPONENTS_CORE.FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public readonly signal$ = inject(signal.SignalsService)
}
