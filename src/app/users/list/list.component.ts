import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadUsers } from '../../store/actions/users.actions';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());

    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
  }
}
