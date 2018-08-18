import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Pacotes } from '../models/pacotes';

@Injectable({ providedIn: 'root' })
export class PacoteService {
  subject$ = new BehaviorSubject<Pacotes>({});
  pacotes$ = this.subject$.asObservable();
  spinner$ = new BehaviorSubject<Boolean>(false);

  constructor(private http: HttpClient) {}

  getPacotes(): Observable<Pacotes> {
    this.spinner$.next(true);
    return this.http.get<Pacotes>(`${environment.apiUrl}/pacotes`).pipe(
      tap(pacotes => {
        this.spinner$.next(false);

        this.subject$.next(pacotes);
      })
    );
  }
}
