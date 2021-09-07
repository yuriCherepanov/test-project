import React from 'react';
import { Route, Switch } from 'react-router';

export class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <p>Home page</p>
        </Route>

        <Route path="/employees">
          <p>Список сотрудников</p>
        </Route>

        <Route path="/time-sheets">
          <p>Список табельных листов</p>
        </Route>

        <Route>
          Page not found
        </Route>
      </Switch>
    );
  }
}
