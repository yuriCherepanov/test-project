import React from 'react';
import { Filter } from './Filter';
import { Pagination } from './Pagination';
import lock from '../img/lock.svg';

export class Table extends React.Component {


  render() {
    return (
      <>
        <div className="table-container">
          <Filter />
          <table className="table">
            <thead>
              <tr>
                <td className="lock-img">
                  <img src={ lock } alt="lock" />
                </td>
                <td className="head-fio">ФИО</td>
                <td className="head-login">Логин</td>
                <td className="head-rol">Роль</td>
                <td>Доступ</td>
                <td className="trash-img"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Бубенцов Прохор Андреевич</td>
                <td>bubencovpa</td>
                <td>Аналитик</td>
                <td>Просмотр аналитических отчетов</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </>
    );
  }
}
