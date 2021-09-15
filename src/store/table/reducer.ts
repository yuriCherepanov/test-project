import {
  SET_EMPLOYEES_DATA_LIST,
  SET_EMPLOYEE_DATA,
  SET_IS_LOADED,
  SET_STATUS
} from "./actions";

const initialState = {
  employeesDataList: [],
  status: 'idle',
  isLoaded: false,
  currentEmployeesData: []
};

export const tableReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_EMPLOYEES_DATA_LIST:
      return {
        ...state,
        employeesDataList: action.payload
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.payload
      };

    case SET_IS_LOADED:
      return {
        ...state,
        isLoaded: true
      };

    case SET_EMPLOYEE_DATA:
      return {
        ...state,
        currentEmployeesData: action.payload
      };

    default:
      return state;
  }
};
