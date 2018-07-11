import { Action } from '@ngrx/store';

import { ILogin } from '../../models/login.model';

export enum LoginActionsTypes {
  LOGIN = '[Login] Login',
  LOGIN_FAIL = '[Login] Login fail',
  LOGIN_SUCCESS = '[Login] Login success'
}

export class Login implements Action {
  readonly type = LoginActionsTypes.LOGIN;
  constructor(public payload: ILogin) {}
}

export class LoginFail implements Action {
  readonly type = LoginActionsTypes.LOGIN_FAIL;
}

export class LoginSuccess implements Action {
  readonly type = LoginActionsTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export type LoginActions = Login | LoginFail | LoginSuccess;
