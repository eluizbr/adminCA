import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { Login, LoginActionsTypes } from './login.actions';

@Injectable()
export class LoginEffects {
  constructor(private action$: Actions, private store: Store<any>) {}

  @Effect({ dispatch: false })
  login$ = this.action$.pipe(
    ofType<Login>(LoginActionsTypes.LOGIN),
    tap(login => console.log) // TODO
  );
}
