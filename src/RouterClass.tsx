import { Route, Switch, Redirect } from 'react-router';
import { TableClass } from './components/TableClass';
import { UserCardClass } from './components/UserCardClass';

export function RouterClass() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/users" />
      </Route>

      <Route path="/users" exact>
        <TableClass />
      </Route>

      <Route path="/users/:userId">
        <UserCardClass />
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
