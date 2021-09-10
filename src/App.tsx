import React from 'react';
import './style/App.css';
import { Account } from './components/Account';
import { Menu } from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { AUTH_API } from './constants';
import logo from './img/Vector.svg';
import printer from './img/printer.svg';
import gitPullRequest from './img/git-pull-request.svg';
import userPlus from './img/user-plus.svg';

interface Props {}

interface State {
  isAuthed: boolean;
  isLoading: boolean;
}

class App extends React.Component<Props, State> {
  state = {
    isAuthed: false,
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true});

    //сначала надо в браузере запустить datafire
    fetch(AUTH_API, {method: 'POST'})
      .then(response => {
        if (!response.ok) {
          throw Error('Something wrong');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          isAuthed: data.success,
          isLoading: false
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({isLoading: false});
      });
  }

  render() {
    if (this.state.isAuthed) {
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
              <Router />
            </main>
          </div>
        </BrowserRouter>
      );
    } else if (this.state.isLoading) {
      return <p className="loader">Loading...</p>
    }
    return <p className="no-auth">Вы не авторизованы</p>;
  }
}

export default App;
