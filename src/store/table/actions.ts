import { EMPLOYEES_API_URL } from '../../constants';

export const SET_EMPLOYEES_DATA_LIST: string = 'TABLE::SET_EMPLOYEES_DATA_LIST';
export const SET_STATUS: string = 'TABLE::SET_STATUS';
export const SET_IS_LOADED: string = 'TABLE::SET_IS_LOADED';

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

export const fetchEmployees = (token: string) => {
  return (dispatch: any, getState: any) => {
    // const { app: { token } } = getState();
    dispatch(setStatus('loading'));

    fetch(
      EMPLOYEES_API_URL,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${ token }`
        }
      }
    ).then(response => {
      if (!response.ok) {
        throw Error('Something wrong with employees data');
      }
      return response.json();
    })
    .then(data => {
      dispatch(setEmployeesDataList(data.data));
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
