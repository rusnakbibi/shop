import { createSelector } from 'reselect';
import { RootState } from 'types/state.types';
import { UserState } from 'types/user.types';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
