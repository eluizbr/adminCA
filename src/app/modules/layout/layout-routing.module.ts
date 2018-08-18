import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { MenuResolve } from './services/menu.resolve';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    resolve: { menu: MenuResolve },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'grupos',
        loadChildren: '../grupos/grupos.module#GruposModule'
      }
    ]
  },
  { path: '**', pathMatch: 'full', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
