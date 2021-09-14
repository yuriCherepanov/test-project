import React from 'react';
import './style/App.css';
import { Account } from './components/Account';
import { Menu } from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import logo from './img/Vector.svg';
import printer from './img/printer.svg';
import gitPullRequest from './img/git-pull-request.svg';
import userPlus from './img/user-plus.svg';
import { connect } from 'react-redux';
import { fetchAuth } from './store/app/actions';
import { Button } from '@material-ui/core';

interface Props {
  isAuthed?: boolean;
  checkAuth?: any;
  status?: string;
}

interface State {}

class App extends React.Component<Props, State> {
  componentDidMount() {
    this.props.checkAuth()
  }

  render() {
    if (this.props.isAuthed) {
      return (
        <BrowserRouter>
          <div className="App-main">
            <header className="App-header">
              <div className="App-header__lGroup">
                <img className="logo" src={ logo } alt="logo" />
                <h1 className="App-name">UserApp</h1>
                <h2 className="App-header__title">Управление пользователями</h2>
              </div>
              <div className="App-header__rGroup">
                <a className="link_flex" href="#">
                  <img className="App-header__icon" src={ printer } alt="printer" />
                </a>
                <a className="link_flex" href="#">
                  <img className="App-header__icon" src={ gitPullRequest } alt="git pr" />
                </a>
                <a className="link_flex" href="#">
                  <img className="App-header__icon" src={ userPlus } alt="add user" />
                </a>
                <Account />
              </div>
            </header>
            <main className="main-block">
              <Menu />
              <div className="main-block__right">
                <Router />
              </div>
            </main>
          </div>
        </BrowserRouter>
      );
    } else if (this.props.status === 'loading') {
      return <p className="text-center">Loading...</p>
    } else if (this.props.status === 'error') {
      return (
        <div className="text-center">
          <p>Error! Try again</p>
          <Button
            onClick={ this.props.checkAuth }
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
          onClick={ this.props.checkAuth }
        >Log in</Button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state.app;
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    checkAuth: () => dispatch(fetchAuth())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
