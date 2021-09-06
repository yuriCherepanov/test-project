import React from 'react';
import logo from '../img/sandwich-menu-logo.svg';
import '../App.sass';

interface Props {}

interface State {
  isMenuOpen: boolean;
  menuItems: string[];
}

export class Menu extends React.Component<Props, State> {
  state = {
    isMenuOpen: false,
    menuItems: [
      'Список сотрудников',
      'Список табельных листов'
    ]
  };

  handleClick = () => {
    this.setState((state: State) => ({
      isMenuOpen: !state.isMenuOpen
    }))
  }

  render() {
    return (
      <div className="logo">
        <img
          src={ logo }
          alt="logo"
          onClick={ this.handleClick }
          />
        <div className={ this.state.isMenuOpen ? 'menuOpen' : 'menuClose' }>
          <ul>
            { this.state.menuItems.map((item, index) =>
              <li className="menuOpen__item" key={index}>
                {item}
              </li>
            ) }
          </ul>
        </div>
      </div>
    );
  }
}
