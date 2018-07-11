import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment.prod';
import { loginReducer, LoginState } from '../modules/access/store/login/login.reducer';

export interface AppState {
  login: LoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
