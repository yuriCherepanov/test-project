import React from 'react';
import arrow from '../img/bottom-arrow.svg';

interface State {
  isAuthMenuOpen: boolean
}

interface Props {}

export class Account extends React.Component<Props, State> {
  state = {
    isAuthMenuOpen: true
  };

  handleClick = () => {
    this.setState((state: State) => ({
      isAuthMenuOpen : !state.isAuthMenuOpen
    }))
  }

  render() {
    return (
      <>
        <div className="auth-wrapper">
          <div>
            Account
          </div>
          <div className="auth-img">
            <img
              src={ arrow }
              alt="arrow"
              onClick={ this.handleClick }
            />
          </div>
        </div>
        <div className={ this.state.isAuthMenuOpen ? 'authMenuOpen' : 'menuClose' }>
          <ul>
            <li>
              <a className="authMenu__item" href="#">Управление аккаунтом</a>
            </li>
            <li>
              <a className="authMenu__item" href="#">Выйти</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
