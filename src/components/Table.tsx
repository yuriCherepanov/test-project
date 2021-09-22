import { useSelector } from 'react-redux';
import { Filter } from './Filter';
import { Pagination } from './Pagination';
import { Users } from './Users';

export function Table() {
  const { current_page } = useSelector((state: any) => state.table);

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
