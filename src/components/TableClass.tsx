import { useSelector } from 'react-redux';
import { FilterClass } from './FilterClass';
import { PaginationClass } from './PaginationClass';
import { UsersClass } from './UsersClass';

export function TableClass() {
  const { current_page } = useSelector((state: any) => state.table);

  return (
    <>
      <div className="table-container">
        <FilterClass />
        <UsersClass />
      </div>
      <PaginationClass current_page={ current_page } />
    </>
  );
}
