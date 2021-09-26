import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private _userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUser),
      mergeMap((action: any) =>
        this._userService.getUserById(action.id).pipe(
          map((user) => usersActions.loadUserSuccess({ user })),
          catchError((err) => of(usersActions.loadUserError({ payload: err })))
        )
      )
    )
  );
}
