import Table from './components/Table';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { UserCard } from './components/UserCard';

export class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/users" />
        </Route>

        <Route path="/users" exact>
          <Table />
        </Route>

        <Route path="/users/:userId">
          <UserCard />
        </Route>

        <Route path="/worktime">
          <p>Учёт времени</p>
        </Route>

        <Route path="/settings">
          <p>Настройки</p>
        </Route>

        <Route>
          Page not found
        </Route>
      </Switch>
    );
  }
}
