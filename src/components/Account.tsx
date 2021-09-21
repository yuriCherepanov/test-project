import React from 'react';
import user from '../img/user.svg';
import dots from '../img/more-vertical.svg';
import active from '../img/Active.svg';

interface State {
  isAuthMenuOpen: boolean
}

interface Props {}

export class Account extends React.Component<Props, State> {
  state = {
    isAuthMenuOpen: false
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
          <div className="auth-avatar">
            <img className="user" src={ user } alt="user" />
          </div>
          <div className="auth-name">
            Alex Petrov
          </div>
          <img
            className="auth-img"
            src={ dots }
            alt="settings menu"
            onClick={ this.handleClick }
          />
          <img className="active" src={ active } alt="active user" />
        </div>
        <div className={ this.state.isAuthMenuOpen ? 'authMenuOpen' : 'menuClose' }>
          <ul>
            <li className="authMenu__li">
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
