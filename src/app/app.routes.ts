import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import * as modules from './modules'

export const routes: Routes = [
  { path: '', redirectTo: 'assist-exam/v1', pathMatch: 'full' },
  { path: 'assist-exam/v1', component: LayoutComponent, children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: modules.ProfileComponent },
    { path: 'users', component: modules.UsersComponent },
    { path: 'generate-exam', component: modules.GenerateExamsComponent },
    { path: 'report&ratings', component: modules.ReportComponent },
    { path: 'performance', component: modules.PerformanceComponent },
  ] },

];
