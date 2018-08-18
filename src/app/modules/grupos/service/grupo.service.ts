import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Grupo } from '../models/grupo';

@Injectable({ providedIn: 'root' })
export class GrupoService {
  subject$ = new BehaviorSubject<Grupo>({});
  grupos$ = this.subject$.asObservable();
  spinner$ = new BehaviorSubject<Boolean>(false);

  constructor(private http: HttpClient) {}

  getGrupos(): Observable<Grupo> {
    this.spinner$.next(true);
    return this.http.get<Grupo>(`${environment.apiUrl}/grupos`).pipe(
      tap(grupos => {
        this.spinner$.next(false);
        this.subject$.next(grupos);
      })
    );
  }
}
