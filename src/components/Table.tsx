import React from 'react';
import { Filter } from './Filter';
import { Pagination } from './Pagination';
import lock from '../img/lock.svg';
import { connect } from 'react-redux';
import { fetchEmployees } from '../store/table/actions';

interface Props {
  token: string;
  table: any;
  fetchEmployees: Function;
  status: string;
  isLoaded: boolean;
}

interface State {}

class Table extends React.Component<Props, State> {
  componentDidMount(){
    this.props.fetchEmployees(this.props.token);
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
                <tr>
                  <td></td>
                  <td>Бубенцов Прохор Андреевич</td>
                  <td>bubencovpa</td>
                  <td>Аналитик</td>
                  <td>Просмотр аналитических отчетов</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination />
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
    token: state.app.token,
    table: state.table.employeesDataList,
    status: state.table.status,
    isLoaded: state.table.isLoaded
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchEmployees: (token: string) => dispatch(fetchEmployees(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
