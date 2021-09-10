import React from 'react';
import { Route, Switch } from 'react-router';

export class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
        </Route>

        <Route path="/users">
          <p>Пользователи</p>
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
