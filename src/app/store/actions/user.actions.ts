import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUser = createAction(
  '[User] Load User',
  props<{ id: string | null }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

export const loadUserError = createAction(
  '[User] Load User Error',
  props<{ payload: any }>()
);
