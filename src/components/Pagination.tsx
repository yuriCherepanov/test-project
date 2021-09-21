import { connect } from 'react-redux';
import React from 'react';
import leftArrow from '../img/chevron_left.svg';
import rightArrow from '../img/chevron_right.svg';
import { fetchEmployees, setLimitOnPage, setEmployeeData } from '../store/table/actions';
import { fakeEmployeesData } from '../constants';

interface Props {
  total_pages: number;
  current_page: number;
  fetchEmployees: Function;
  limit: number;
  setLimitOnPage: Function;
  setEmployeeData: Function;
}

interface State {}

class Pagination extends React.Component<Props, State> {

  getPages(count: number) {
    let result = [];
    for (let i = 1; i <= count; i++) {
      result.push(
        <li
          className={ i === this.props.current_page ? "page_hover" : "page" }
          onClick={ i === this.props.current_page ? undefined : this.handleClick }
          key={ i }
        >{ i }</li>
      );
    }
    return result;
  }

  currentPagesView = () => {
    const currPage = this.props.current_page;
    const pageList = this.getPages(this.props.total_pages);

    if (currPage === 1) {
      return pageList.slice(currPage - 1, currPage + 2);
    } else if (currPage === this.props.total_pages) {
      return pageList.slice(currPage - 3, currPage);
    }
    return pageList.slice(currPage - 2, currPage + 1);
  }

  handleClick = (e: any) => {
    const page = +e.target.innerHTML;
    this.props.fetchEmployees(page - 1);
  }

  handleClickLeftArrow = () => {
    if (this.props.current_page !== 1) {
      this.props.fetchEmployees(this.props.current_page - 2);
    }
    return;
  }

  handleClickRightArrow = () => {
    if (this.props.current_page !== this.props.total_pages) {
      this.props.fetchEmployees(this.props.current_page);
    }
    return;
  }

  handleChange = (e: any) => {
    this.props.setLimitOnPage(+e.target.value);
    this.props.fetchEmployees(0);
    this.props.setEmployeeData(fakeEmployeesData.slice(0, +e.target.value));
  }

  render() {
    return (
      <div className="pagination-container">
        <div>
          <select
            className="input"
            value={ this.props.limit }
            onChange={ this.handleChange }
          >
            <option value="10">10 на странице</option>
            <option value="5">5 на странице</option>
            <option value="3">3 на странице</option>
          </select>
        </div>
        <div className="pages-container">
          <ul className="pages">
            <li className="arrow" onClick={ this.handleClickLeftArrow }>
              <img src={ leftArrow } alt="left" />
            </li>
            { this.currentPagesView() }
            <li className="page page_no-hover">...</li>
            <li className="page page_no-hover">{ this.props.total_pages }</li>
            <li className="arrow" onClick={ this.handleClickRightArrow }>
              <img src={ rightArrow } alt="right" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    total_pages: state.table.total_pages,
    limit: state.table.limit
  };
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchEmployees: (page: number) => dispatch(fetchEmployees(page)),
    setLimitOnPage: (limit: number) => dispatch(setLimitOnPage(limit)),
    setEmployeeData: (data: any) => dispatch(setEmployeeData(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
