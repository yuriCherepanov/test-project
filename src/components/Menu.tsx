import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';

export class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        { MENU_ITEMS.map((item, index) =>
          <Link
            to={ item.path }
            className="menu__item"
            key={index}
          >
            <img className="menu__img" src={ item.img } alt="menu" />
            { item.name }
          </Link>
        ) }
      </ul>
    );
  }
}
