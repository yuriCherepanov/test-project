import React from 'react';
import { withRouter } from 'react-router';
import { fetchEmployeeById } from '../store/table/actions';
import { connect } from 'react-redux';
import placeholder from '../img/placeholder.png';
import plus from '../img/plus.svg';
import x from '../img/x.svg';
import lock from '../img/lock.svg';
import unlock from '../img/unlock.svg';

class UserCard extends React.Component<any> {
  state= {data: {
    name: 'unknown',
    isClosed: false,
    login: 'unknown',
    role: 'unknown',
    access: 'unknown',
    img: ''
  }};
  
  componentDidMount() {
    const { userId } = this.props.match.params;
    // this.props.fetchEmployeeById(userId);

    this.setState({data: this.getCurrentUserData(+userId)});
  }

  getCurrentUserData = (userId: number) => {
    const data = this.props.currentEmployeesData.find((item: any) => {
      return item.id === userId;
    })
    return data;
  }

  clickHandler = () => {}

  render() {
    const { name, isClosed, login, role, access, img } = this.state.data;

    return (
      <div className="card-container">
        <div className="card-left-block">
          <div className="image-conmainer">
            <img className="image" src={ img || placeholder } alt="employee" />
          </div>
          <button className="btn btn__reset">Сбросить пароль</button>
          <button className="btn btn__delete">Удалить пользователя</button>
        </div>
        <form className="card-form">
          <p className="card-form__name">{ name }</p>
          <label>
            <p className="card-form__label">Логин</p>
            <input
              type="text"
              className="card-form__input"
              value={ login }
            />
          </label>
          <label>
            <p className="card-form__label">Роль</p>
            <select className="card-form__input card-form__select">
              <option value={ role }>{ role }</option>
            </select>
          </label>
          <label>
            <p className="card-form__label">Доступ</p>
            <div className="unput-mini-group">
              <input
                type="text"
                className="card-form__input-mini"
                value={ access }
              />
              <button className="btn-mini"><img src={ x } alt="remove" /></button>
              <button className="btn-plus"><img src={ plus } alt="add" /></button>
            </div>
          </label>
          <div className="access-block">
            <img src={ isClosed ? lock : unlock } alt="access" />
            <p className="access-text">{ isClosed ? 'Заблокирован' : 'Разблокирован' }</p>
          </div>
          <p className="change-log">Последние изменения 29.12.2020</p>
        </form>
        <button className="card-btn" onClick={ this.clickHandler }>Сохранить</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentEmployeesData: state.table.currentEmployeesData
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchEmployeeById: (id: number) => dispatch(fetchEmployeeById(id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserCard)
);
