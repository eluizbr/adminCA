import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GrupoMainComponent } from './grupo-main/grupo-main.component';
import { GruposRoutingModule } from './grupos-routing.module';
import { ListarGruposComponent } from './listar-grupos/listar-grupos.component';

@NgModule({
  imports: [CommonModule, SharedModule, GruposRoutingModule],
  declarations: [GrupoMainComponent, ListarGruposComponent]
})
export class GruposModule {}
