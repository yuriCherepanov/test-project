import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import { withRouter } from 'react-router';

class Menu extends React.Component<any> {
  render() {
    const { location: { pathname } } = this.props;

    return (
      <ul className="menu">
        { MENU_ITEMS.map((item, index) =>
          <Link
            to={ item.path }
            className={ item.path === pathname ? "menu__item_hover" : "menu__item" }
            key={ index }
          >
            <img className="menu__img" src={ item.img } alt="menu" />
            { item.name }
          </Link>
        ) }
      </ul>
    );
  }
}

export default withRouter(Menu);
