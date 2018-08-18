import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrupoMainComponent } from './grupo-main/grupo-main.component';
import { ListarGruposComponent } from './listar-grupos/listar-grupos.component';
import { GrupoRersolve } from './service/grupo.resolve';
import { PacotesResolve } from './service/pacotes.resolve';

const routes: Routes = [
  {
    path: '',
    component: GrupoMainComponent,
    children: [
      {
        path: 'listar',
        component: ListarGruposComponent,
        resolve: { grupo: GrupoRersolve, pacotes: PacotesResolve }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GruposRoutingModule {}
