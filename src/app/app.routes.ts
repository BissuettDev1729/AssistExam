import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'project-manager', pathMatch: 'full' },
  { path: 'project-manager', component: LayoutComponent, children: [] }
];
