import React from 'react';
import './App.sass';
import { Account } from './components/Accaunt';
import { Menu } from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App-header">
          <Menu />
          <Account />
        </header>
        <Router />
     </BrowserRouter>
    );
  }
}

export default App;
