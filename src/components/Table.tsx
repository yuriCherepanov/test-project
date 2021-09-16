import React from 'react';
import { Filter } from './Filter';
import Pagination from './Pagination';
import lock from '../img/lock.svg';
import { connect } from 'react-redux';
import { fetchEmployees, fetchEmployeeById, setEmployeeData } from '../store/table/actions';
import { TableItem } from './TableItem';
import { fakeEmployeesData } from '../constants';

interface Props {
  data: any;
  fetchEmployees: Function;
  isLoaded: boolean;
  setEmployeeData: Function;
  current_page: number;
  limit: number;
}

interface State {}

class Table extends React.Component<Props, State> {
  componentDidMount(){
    this.props.fetchEmployees(0);
    this.props.setEmployeeData(fakeEmployeesData.slice(0, this.props.limit));
  }

  render() {
    if (this.props.isLoaded) {
      return (
        <>
          <div className="table-container">
            <Filter />
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
                { this.props.data.map((item: any, index: any) =>
                  <TableItem
                    key={ index }
                    data={ item }
                  />
                ) }
              </tbody>
            </table>
          </div>
          <Pagination
            current_page={ this.props.current_page }
          />
        </>
      );
    }
    return (
      <p className="text-center">Load data...</p>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    data: state.table.currentEmployeesData,
    isLoaded: state.table.isLoaded,
    current_page: state.table.current_page,
    limit: state.table.limit
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchEmployees: (page: number) => dispatch(fetchEmployees(page)),
    fetchEmployeeById: (id: number) => dispatch(fetchEmployeeById(id)),
    setEmployeeData: (data: any) => dispatch(setEmployeeData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
