import React from 'react';
import './App.sass';
import { Account } from './components/Accaunt';
import { Menu } from './components/Menu';

class App extends React.Component {
  render() {
    return (
     <header className="App-header">
       <Menu />
       <Account />
     </header>
    );
  }
}

export default App;
