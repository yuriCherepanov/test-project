import lockOrange from '../img/lock-orange.svg';
import unlock from '../img/unlock.svg';
import trash from '../img/trash.svg';
import { useState } from 'react';
import { useHistory } from 'react-router';

export function TableItemClass(props: any) {
  const { name, isClosed, login, role, access, id } = props.data;
  const [x, setX] = useState(0);
  const { push } = useHistory();

  const clickHandler = () => {
    push(`/users/${id}`);
  };

  const mouseOverHandler = (e: any) => {
    setX(e.clientX - 180);
  };

  return (
    <tr className="table-item"
      onClick={ clickHandler }
      onMouseOver={ mouseOverHandler }
    >
      <td className="lock-img">
        { isClosed ?
          <img src={ lockOrange } alt="lock" /> :
          <img src={ unlock } alt="unlock" />
        }
      </td>
      <td>{ name }</td>
      <td>{ login }</td>
      <td>{ role }</td>
      <td>
        <p className="access">{ access }</p>
      </td>
      <td className="lock-img trash-img">
        <img src={ trash } alt="delete" />
      </td>
      <td
        className="tooltip"
        style={ {left: `${x}px`} }
      >Подробнее</td>
    </tr>
  );
}
