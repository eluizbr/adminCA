import { createSelector } from '@ngrx/store';

import { selectLoginState } from './login.reducer';

export const selectIslooged = createSelector(
  selectLoginState,
  state => state.isLogged
);

export const selectSpinner = createSelector(
  selectLoginState,
  state => state.spinner
);

export const selectUser = createSelector(selectLoginState, state => state.user);
