import { useDispatch, useSelector } from "react-redux";
import leftArrow from '../img/chevron_left.svg';
import rightArrow from '../img/chevron_right.svg';
import { fetchEmployees, setLimitOnPage, setEmployeeData } from '../store/table/actions';
import { fakeEmployeesData } from '../constants';

export function Pagination({ current_page }: any) {
  const dispatch = useDispatch();
  const { total_pages, limit } = useSelector((state: any) => state.table);

  const getPages = (count: number) => {
    const result = [];
    for (let i = 1; i <= count; i++) {
      result.push(
        <li
          className={ i === current_page ? "page_hover" : "page" }
          onClick={ i === current_page ? undefined : handleClick }
          key={ i }
        >{ i }</li>
      );
    }
    return result;
  };

  const setCurrentPagesView = () => {
    const pageList = getPages(total_pages);

    if (current_page === 1) {
      return pageList.slice(current_page - 1, current_page + 2);
    } else if (current_page === total_pages) {
      return pageList.slice(current_page - 3, current_page);
    }
    return pageList.slice(current_page - 2, current_page + 1);
  };

  const handleClick = (e: any) => {
    const page = +e.target.innerHTML;
    dispatch(fetchEmployees(page - 1));
  };

  const handleClickArrow = (e: any) => {
    const currentArrow = e.target.alt;

    switch (currentArrow) {
      case 'left':
        if (current_page !== 1) {
          dispatch(fetchEmployees(current_page - 2));
        }
        return;

      case 'right':
        if (current_page !== total_pages) {
          dispatch(fetchEmployees(current_page));
        }
        return;
    }
  };

  const handleChange = (e: any) => {
    dispatch(setLimitOnPage(+e.target.value));
    dispatch(fetchEmployees(0));
    dispatch(setEmployeeData(fakeEmployeesData.slice(0, +e.target.value)));
  };

  return (
    <div className="pagination-container">
      <div>
        <select
          className="input"
          value={ limit }
          onChange={ handleChange }
        >
          <option value="10">10 на странице</option>
          <option value="5">5 на странице</option>
          <option value="3">3 на странице</option>
        </select>
      </div>
      <div className="pages-container">
        <ul className="pages">
          <li className="arrow" onClick={ handleClickArrow }>
            <img src={ leftArrow } alt="left" />
          </li>
          { setCurrentPagesView() }
          <li className="page page_no-hover">...</li>
          <li className="page page_no-hover">{ total_pages }</li>
          <li className="arrow" onClick={ handleClickArrow }>
            <img src={ rightArrow } alt="right" />
          </li>
        </ul>
      </div>
    </div>
  );
}
