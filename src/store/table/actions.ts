import { EMPLOYEES_API_URL } from '../../constants';
import axios from 'axios';

export const SET_EMPLOYEES_DATA_LIST: string = 'TABLE::SET_EMPLOYEES_DATA_LIST';
export const SET_STATUS: string = 'TABLE::SET_STATUS';
export const SET_IS_LOADED: string = 'TABLE::SET_IS_LOADED';
export const SET_EMPLOYEE_DATA: string = 'TABLE::SET_EMPLOYEE_DATA';

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

export const fetchEmployees = () => {
  return (dispatch: any, getState: any) => {
    const { app: { token } } = getState();

    dispatch(setStatus('loading'));

    axios.get(
      `${EMPLOYEES_API_URL}?limit=10&offset=0`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    ).then(response => {
      // console.log(response.headers);
      
      dispatch(setEmployeesDataList(response.data));
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
