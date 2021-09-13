import {
  SET_ERROR_STATUS,
  SET_IDLE_STATUS,
  SET_IS_AUTHED,
  SET_LOADING_STATUS
} from "./actions";

const initialState = {
  isAuthed: false,
  status: 'idle'
};

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_AUTHED:
      return {
        ...state,
        isAuthed: action.payload
      };

    case SET_LOADING_STATUS:
      return {
        ...state,
        status: 'loading'
      };

    case SET_ERROR_STATUS:
      return {
        ...state,
        status: 'error'
      };

    case SET_IDLE_STATUS:
      return {
        ...state,
        status: 'idle'
      };

    default:
      return state;
  }
};
