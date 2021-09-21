import lock from '../img/lock.svg';
import { fakeEmployeesData } from '../constants';
import { fetchEmployees, setEmployeeData } from '../store/table/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TableItemClass } from './TableItemClass';

export function UsersClass() {
  const {
    currentEmployeesData: data,
    isLoaded,
    limit
  } = useSelector((state: any) => state.table);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees(0));
    dispatch(setEmployeeData(fakeEmployeesData.slice(0, limit)));
  }, []);

  if (isLoaded) {
    return (
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
          { data.map((item: any, index: any) =>
            <TableItemClass
              key={ index }
              data={ item }
            />
          ) }
        </tbody>
      </table>
    );
  }
  return <p className="text-center">Load data...</p>;
}
