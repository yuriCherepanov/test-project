import React from 'react';

export class Filter extends React.Component {
  render() {
    return (
      <form className="filter-container">
        <input
          className="filter-input"
          type="text"
          placeholder="Поиск по ФИО"
        />
        <div className="filter-select__mg">
          <select className="filter-select" name="" id="">
            <option value="">Выберите роль</option>
          </select>
        </div>
        <div className="filter-select__mg">
          <select className="filter-select" name="" id="">
            <option value="">Выберите доступ</option>
          </select>
        </div>
        <button className="filter-btn" type="reset">Сбросить</button>
      </form>
    );
  }
}
