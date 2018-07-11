import { createFeatureSelector } from '@ngrx/store';

import { LoginActions, LoginActionsTypes } from './login.actions';

export interface LoginState {
  isLogged: boolean;
  spinner: boolean;
  user: any;
}

export const loginInitialState = {
  isLogged: false,
  spinner: false,
  user: undefined
};

export function loginReducer(state = loginInitialState, action: LoginActions) {
  switch (action.type) {
    case LoginActionsTypes.LOGIN_FAIL:
    case LoginActionsTypes.LOGIN: {
      return {
        ...state,
        isLogged: false,
        spinner: true,
        user: undefined
      };
    }

    case LoginActionsTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        spinner: false,
        user: action.payload
      };
    }

    default:
      return state;
  }
}

export const selectLoginState = createFeatureSelector<LoginState>('login');
