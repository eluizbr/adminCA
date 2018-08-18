import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Menu } from '../../shared/models/menus';

@Injectable({ providedIn: 'root' })
export class MenuService {
  subject = new BehaviorSubject<Menu[]>([]);
  menu$ = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  getMenu(): Observable<Menu[]> {
    return this.http
      .get<Menu[]>('/assets/menu.json')
      .pipe(tap(menu => this.subject.next(menu)));
  }
}
