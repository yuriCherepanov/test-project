import React from 'react';
import arrow from '../img/bottom-arrow.svg';

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
            <p>JD</p>
          </div>
          <div className="auth-name">
            John Doe
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
