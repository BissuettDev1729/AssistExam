// Angular modules
import { Component } from '@angular/core';
// Core components
import { RouterModule } from '@angular/router';
import * as COMPONENTS_CORE from '../../core/components'

@Component({
  selector: 'app-layout',
  imports: [
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

}
