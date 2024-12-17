import { Component } from '@angular/core';
import * as sharedComponents from '../../shared/components'

@Component({
  selector: 'app-profile',
  imports: [
    sharedComponents.SvgIconComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
