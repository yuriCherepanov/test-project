import React from 'react';
import lockOrange from '../img/lock-orange.svg';
import unlock from '../img/unlock.svg';
import trash from '../img/trash.svg';

interface Props {
  data: any;
}

interface State {}

export class TableItem extends React.Component<Props, State> {
  render() {
    const { name, isClosed, login, role, access } = this.props.data;

    return (
      <tr className="table-item">
        <td className="lock-img">
          { isClosed ? <img src={ lockOrange } alt="lock" /> : <img src={ unlock } alt="unlock" /> }
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
      </tr>
    );
  }
}
