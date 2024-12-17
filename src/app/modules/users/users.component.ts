import { Component } from '@angular/core';
import * as sharedComponents from '../../shared/components'

@Component({
  selector: 'app-users',
  imports: [
    sharedComponents.SvgIconComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
