import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import * as sharedComponents from '../../../shared/components'
import * as signal from '../../../shared/services/signals.service'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterModule,
    sharedComponents.SvgIconComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public readonly signal$ = inject(signal.SignalsService)

  public menus: {menu: string, svg: string, link: string}[] = [
    {menu: 'Perfil', svg: 'userCircleGear', link: 'profile'},
    {menu: 'Usuarios', svg: 'usersThree', link: 'users'},
    {menu: 'Generar examen', svg: 'suitcaseSimple', link: 'generate-exam'},
    {menu: 'Reporte / Calificaciones', svg: 'rocket', link: 'report&ratings'},
    {menu: 'Rendimiento', svg: 'alignBottom', link: 'performance'},
  ]


}
