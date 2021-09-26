import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/users.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private _userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() =>
        this._userService.getUsers().pipe(
          map((users) => usersActions.loadUsersSuccess({ users })),
          catchError((err) => of(usersActions.loadUsersError({ payload: err })))
        )
      )
    )
  );
}
