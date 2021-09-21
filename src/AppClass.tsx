import { useEffect } from 'react';
import './style/App.css';
import arrow from './img/arrow-left.svg';
import printer from './img/printer.svg';
import logo from './img/Vector.svg';
import gitPullRequest from './img/git-pull-request.svg';
import userPlus from './img/user-plus.svg';
import { RouterClass } from './RouterClass';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from './store/app/actions';
import { useHistory } from 'react-router';
import { AccountClass } from './components/AccountClass';
import { MenuClass } from './components/MenuClass';

export default function AppClass() {
  const dispatch = useDispatch();
  const {
    app: { isAuthed, status },
    user: { isUserPage }
  } = useSelector((state: any) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  const goBackClickHadler = () => {
    history.goBack();
  };

  if (isAuthed) {
    return (
      <div className="App-main">
        <header className="App-header">
          <div className="App-header__lGroup">
            <img className="logo" src={ logo } alt="logo" />
            <h1 className="App-name">UserApp</h1>
            <button
              className={ isUserPage ? "arrow-btn" : "arrow-btn_hide" }
              onClick={ goBackClickHadler }
            >
              <img src={ arrow } alt="go back" />
            </button>
            <h2 className="App-header__title">Управление пользователями</h2>
          </div>
          <div className="App-header__rGroup">
            <a className="link_flex" href="#">
              <img className="App-header__icon" src={ printer } alt="printer" />
            </a>
            <a className={ isUserPage ? "link_flex_hide" : "link_flex" } href="#">
              <img className="App-header__icon" src={ gitPullRequest } alt="git pr" />
            </a>
            <a className={ isUserPage ? "link_flex_hide" : "link_flex" } href="#">
              <img className="App-header__icon" src={ userPlus } alt="add user" />
            </a>
            <AccountClass />
          </div>
        </header>
        <main className="main-block">
          <MenuClass isUserPage={ isUserPage } />
          <div className="main-block__right">
            <RouterClass />
          </div>
        </main>
      </div>
    );
  } else if (status === 'loading') {
    return <p className="text-center">Loading...</p>
  } else if (status === 'error') {
    return (
      <div className="text-center">
        <p>Error! Try again</p>
        <Button
          onClick={ dispatch(fetchAuth()) }
          variant="contained"
          size="small"
        >Log in</Button>
      </div>
    );
  }
  return (
    <div className="text-center">
      <p className="text-center">Вы не авторизованы</p>
      <Button
        variant="contained"
        size="small"
        onClick={ dispatch(fetchAuth()) }
      >Log in</Button>
    </div>
  );
}
