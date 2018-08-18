import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { PacoteService } from './pacotes.service';

@Injectable({ providedIn: 'root' })
export class PacotesResolve implements Resolve<any[]> {
  constructor(private pacoteService: PacoteService) {}

  resolve() {
    return this.pacoteService.getPacotes();
  }
}
