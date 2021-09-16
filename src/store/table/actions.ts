import { EMPLOYEES_API_URL } from '../../constants';
import axios from 'axios';
import { fetchAuth } from '../app/actions';

export const SET_EMPLOYEES_DATA_LIST: string = 'TABLE::SET_EMPLOYEES_DATA_LIST';
export const SET_STATUS: string = 'TABLE::SET_STATUS';
export const SET_IS_LOADED: string = 'TABLE::SET_IS_LOADED';
export const SET_EMPLOYEE_DATA: string = 'TABLE::SET_EMPLOYEE_DATA';
export const SET_TOTAL_PAGES: string = 'TABLE::SET_TOTAL_PAGES';
export const SET_CURRENT_PAGE: string = 'TABLE::SET_CURRENT_PAGE';
export const SET_LIMIT_ON_PAGE: string = 'TABLE::SET_LIMIT_ON_PAGE';

export const setEmployeesDataList = (dataList: any) => {
  return {
    type: SET_EMPLOYEES_DATA_LIST,
    payload: dataList
  };
};

export const setStatus = (status: string) => {
  return {
    type: SET_STATUS,
    payload: status
  };
};

export const setIsLoaded = () => {
  return {
    type: SET_IS_LOADED
  };
};

export const setEmployeeData = (data: any) => {
  return {
    type: SET_EMPLOYEE_DATA,
    payload: data
  };
};

export const setTotalPages = (count: number) => {
  return {
    type: SET_TOTAL_PAGES,
    payload: count
  };
};

export const setCurrentPage = (page: number) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  };
};

export const setLimitOnPage = (limit: number) => {
  return {
    type: SET_LIMIT_ON_PAGE,
    payload: limit
  };
};

export const fetchEmployees = (page: number) => {
  return (dispatch: any, getState: any) => {
    const { app: { token }, table: { limit } } = getState();
    dispatch(fetchAuth());
    dispatch(setStatus('loading'));

    axios.get(
      `${EMPLOYEES_API_URL}?limit=${limit}&offset=${page * 10}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    ).then(response => {
      // console.log(response);
      dispatch(setEmployeesDataList(response.data.data));
      dispatch(setTotalPages(response.data.metadata.total_pages));
      dispatch(setCurrentPage(response.data.metadata.current_page));
      dispatch(setLimitOnPage(response.data.limit));
      dispatch(setIsLoaded());
    })
    .catch(err => {
      console.error(err);
      dispatch(setStatus('error'));
    })
    .finally(() => {
      dispatch(setStatus('idle'));
    });
  };
};

export const fetchEmployeeById = (id: number) => {
  return (dispatch: Function, getState: Function) => {
    let url = `${EMPLOYEES_API_URL}/${id}`;
    const { app: { token } } = getState();

    fetch(
      url,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    ).then(response => {
      if (!response.ok) {
        throw Error('Something wrong with fetch employee');
      }
      return response.json();
    })
    .then(data => {
      dispatch(setEmployeeData(data));
    })
    .catch(err => console.error(err));
  };
}
