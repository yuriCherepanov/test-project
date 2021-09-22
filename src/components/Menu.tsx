import { Link } from "react-router-dom";
import { MENU_ITEMS } from '../constants';
import { useLocation } from "react-router";

export function Menu({ isUserPage }: any) {
  const { pathname } = useLocation();
 
  const getClassName = (item: any) => {
    if (item.path === pathname) {
      return "menu__item_hover";
    } else if (item.name === 'Пользователи' && isUserPage) {
      return "menu__item_hover";
    }
    return "menu__item";
  }

  return (
    <ul className="menu">
      { MENU_ITEMS.map((item, index) =>
        <Link
          to={ item.path }
          className={ getClassName(item) }
          key={ index }
        >
          <img className="menu__img" src={ item.img } alt="menu" />
          { item.name }
        </Link>
      ) }
    </ul>
  );
}
