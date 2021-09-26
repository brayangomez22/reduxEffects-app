import { Action, createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions';
import { User } from '../../models/user.model';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _counterReducer = createReducer(
  usersInitialState,

  on(loadUsers, (state) => ({ ...state, loading: true })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),

  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading_: false,
    loaded: false,
    error: payload,
  }))
);

export function counterReducer(state: UsersState | undefined, action: Action) {
  return _counterReducer(state, action);
}
