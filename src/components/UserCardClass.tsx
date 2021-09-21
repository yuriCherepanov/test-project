import { useDispatch, useSelector } from "react-redux";
import placeholder from '../img/placeholder.png';
import plus from '../img/plus.svg';
import x from '../img/x.svg';
import lock from '../img/lock.svg';
import unlock from '../img/unlock.svg';
import { setIsUserPage } from '../store/user/actions';
import { fetchEmployeeById } from '../store/table/actions';
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export function UserCardClass() {
  const dispatch = useDispatch();
  const { currentEmployeesData } = useSelector((state: any) => state.table);
  const { userId } = useParams<any>();
  const [data, setData] = useState({
    name: 'unknown',
    isClosed: false,
    login: 'unknown',
    role: 'unknown',
    access: 'unknown',
    img: ''
  });

  useEffect(() => {
    dispatch(setIsUserPage(true));
    setData(getCurrentUserData(+userId));
    // dispatch(fetchEmployeeById(userId));
    return () => {
      dispatch(setIsUserPage(false));
    }
  }, [data]);

  const getCurrentUserData = (userId: number) => {
    const data = currentEmployeesData.find((item: any) => {
      return item.id === userId;
    });
    return data;
  };

  const clickHandler = () => {};

  return (
    <div className="card-container">
      <div className="card-left-block">
        <div className="image-conmainer">
          <img className="image" src={ data.img || placeholder } alt="employee" />
        </div>
        <button className="btn btn__reset">Сбросить пароль</button>
        <button className="btn btn__delete">Удалить пользователя</button>
      </div>
      <form className="card-form">
        <p className="card-form__name">{ data.name }</p>
        <label>
          <p className="card-form__label">Логин</p>
          <input
            type="text"
            className="card-form__input"
            value={ data.login }
          />
        </label>
        <label>
          <p className="card-form__label">Роль</p>
          <select className="card-form__input card-form__select">
            <option value={ data.role }>{ data.role }</option>
          </select>
        </label>
        <label>
          <p className="card-form__label">Доступ</p>
          <div className="unput-mini-group">
            <input
              type="text"
              className="card-form__input-mini"
              value={ data.access }
            />
            <button className="btn-mini"><img src={ x } alt="remove" /></button>
            <button className="btn-plus"><img src={ plus } alt="add" /></button>
          </div>
        </label>
        <div className="access-block">
          <img src={ data.isClosed ? lock : unlock } alt="access" />
          <p className="access-text">{ data.isClosed ? 'Заблокирован' : 'Разблокирован' }</p>
        </div>
        <p className="change-log">Последние изменения 29.12.2020</p>
      </form>
      <button className="card-btn" onClick={ clickHandler }>Сохранить</button>
    </div>
  );
}
