import React from 'react';
import lock from '../img/lock.svg';
import TableItem from './TableItem';
import { fakeEmployeesData } from '../constants';
import { connect } from 'react-redux';
import { fetchEmployees, setEmployeeData } from '../store/table/actions';


class Users extends React.Component<any> {
  componentDidMount(){
    if (this.props.isAuthed) {
      this.props.fetchEmployees(0);
      this.props.setEmployeeData(fakeEmployeesData.slice(0, this.props.limit));
    }
    setTimeout(() => {
      this.props.fetchEmployees(0);
      this.props.setEmployeeData(fakeEmployeesData.slice(0, this.props.limit));
    }, 500);
  }

  // clickHandler = (e: any) => {
  //   console.log(data);
    
  // }

  render() {
    if (this.props.isLoaded) {
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
          { this.props.data.map((item: any, index: any) =>
            <TableItem
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
}

const mapStateToProps = (state: any) => {
  return {
    data: state.table.currentEmployeesData,
    isLoaded: state.table.isLoaded,
    current_page: state.table.current_page,
    limit: state.table.limit,
    isAuthed: state.app.isAuthed
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchEmployees: (page: number) => dispatch(fetchEmployees(page)),
    setEmployeeData: (data: any) => dispatch(setEmployeeData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
