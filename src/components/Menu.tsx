import React from 'react';
import logo from '../img/sandwich-menu-logo.svg';
import { Link } from 'react-router-dom';

interface Props {}

interface State {
  isMenuOpen: boolean;
  menuItems: object[];
}

export class Menu extends React.Component<Props, State> {
  state = {
    isMenuOpen: false,
    menuItems: [
      {
        name: 'Список сотрудников',
        path: '/employees'
      },
      {
        name: 'Список табельных листов',
        path: '/time-sheets'
      }
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
              <li className="menuOpen__item" key={ index }>
                <Link
                  to={ item.path }
                  className="menuOpen__link"
                  onClick={ this.handleClick }
                >
                  { item.name }
                </Link>
              </li>
            ) }
          </ul>
        </div>
      </div>
    );
  }
}
