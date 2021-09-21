import {
  SET_CURRENT_PAGE,
  SET_EMPLOYEES_DATA_LIST,
  SET_EMPLOYEE_DATA,
  SET_IS_LOADED,
  SET_LIMIT_ON_PAGE,
  SET_STATUS,
  SET_TOTAL_PAGES
} from "./actions";

const initialState = {
  employeesDataList: [],
  status: 'idle',
  isLoaded: false,
  currentEmployeesData: [],
  total_pages: null,
  current_page: null,
  limit: 10
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

    case SET_TOTAL_PAGES:
      return {
        ...state,
        total_pages: action.payload
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        current_page: action.payload + 1
      };

    case SET_LIMIT_ON_PAGE:
      return {
        ...state,
        limit: action.payload
      };

    default:
      return state;
  }
};
