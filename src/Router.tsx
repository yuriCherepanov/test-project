import Table from './components/Table';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

export class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          Home page
        </Route>

        <Route path="/users">
          <Table />
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
