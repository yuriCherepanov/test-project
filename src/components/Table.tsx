import React from 'react';
import { Filter } from './Filter';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import Users from './Users';

interface Props {
  current_page: number;
}

interface State {}

class Table extends React.Component<Props, State> {
  render() {
    return (
      <>
        <div className="table-container">
          <Filter />
          <Users />
        </div>
        <Pagination current_page={ this.props.current_page } />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    current_page: state.table.current_page
  };
};

export default connect(mapStateToProps)(Table);
