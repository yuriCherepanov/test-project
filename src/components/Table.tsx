import { useSelector } from 'react-redux';
import { tableSelector } from '../store/table/selectors';
import { Filter } from './Filter';
import { Pagination } from './Pagination';
import { Users } from './Users';

export function Table() {
  const { current_page } = useSelector(tableSelector);

  return (
    <>
      <div className="table-container">
        <Filter />
        <Users />
      </div>
      <Pagination current_page={ current_page } />
    </>
  );
}
