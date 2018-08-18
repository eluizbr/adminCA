import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Grupo } from '../models/grupo';
import { Pacotes } from '../models/pacotes';
import { GrupoService } from '../service/grupo.service';
import { PacoteService } from '../service/pacotes.service';

declare var $: any;

@Component({
  selector: 'grupos-listar-grupos',
  templateUrl: './listar-grupos.component.html',
  styleUrls: ['./listar-grupos.component.css']
})
export class ListarGruposComponent implements OnInit, AfterViewInit {
  grupos$: Observable<Grupo>;
  pacotes$: Observable<Pacotes>;
  spinner$: Observable<Boolean>;
  collapse: boolean;
  listOfOption = [];
  listOfTagOptions = [];
  isVisible = false;

  constructor(
    private grupoService: GrupoService,
    private pacotesService: PacoteService
  ) {}

  ngOnInit() {
    this.grupos$ = this.grupoService.grupos$;
    this.spinner$ = this.grupoService.spinner$;

    this.pacotesService.pacotes$.subscribe(pacotes => {
      this.listOfOption = pacotes.docs
        .map(pacote => pacote)
        .filter(pacote => pacote.grupos.temGrupo);
    });
  }

  ngAfterViewInit() {
    $('.ibox-collapse').click(function() {
      const ibox = $(this).closest('div.ibox');
      ibox
        .toggleClass('collapsed-mode')
        .children('.ibox-body')
        .slideToggle(200);
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log(this.listOfTagOptions);
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('cancel');
    this.isVisible = false;
  }
}
