import React from 'react';
import './App.sass';
import { Account } from './components/Account';
import { Menu } from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { AUTH_API } from './constants';

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

    //сначала надо запустить datafire
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
          <header className="App-header">
            <Menu />
            <Account />
          </header>
          <Router />
      </BrowserRouter>
      );
    } else if (this.state.isLoading) {
      return <p className="loader">Loading...</p>
    }
    return <p className="no-auth">Вы не авторизованы</p>;
  }
}

export default App;
