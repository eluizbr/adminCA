import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Grupo } from '../models/grupo';
import { GrupoService } from './grupo.service';

@Injectable({ providedIn: 'root' })
export class GrupoRersolve implements Resolve<Grupo> {
  constructor(private grupoService: GrupoService) {}

  resolve() {
    return this.grupoService.getGrupos();
  }
}
