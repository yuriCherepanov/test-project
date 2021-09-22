import { Route, Switch, Redirect } from 'react-router';
import { Table } from './components/Table';
import { UserCard } from './components/UserCard';

export function Router() {
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
