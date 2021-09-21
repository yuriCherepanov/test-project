import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import { withRouter } from 'react-router';

class Menu extends React.Component<any> {
  getClassName = (item: any) => {
    const { location: { pathname }, isUserPage } = this.props;

    if (item.path === pathname) {
      return "menu__item_hover";
    } else if (item.name === 'Пользователи' && isUserPage) {
      return "menu__item_hover";
    }
    return "menu__item";
  }

  render() {
    return (
      <ul className="menu">
        { MENU_ITEMS.map((item, index) =>
          <Link
            to={ item.path }
            className={this.getClassName(item)}
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
