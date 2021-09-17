import React from 'react';

export class UserCard extends React.Component<any> {
  render() {
    return (
      <div className="card-container">
        <div className="card-left-block"></div>
        <form className="card-form"></form>
        <button className="card-btn">Сохранить</button>
      </div>
    );
  }
}
