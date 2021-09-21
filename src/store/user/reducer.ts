import { SET_IS_USER_PAGE } from "./actions";

const initialState = {
  isUserPage: false
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_USER_PAGE:
      return {
        ...state,
        isUserPage: action.payload
      };

    default:
      return state;
  }
};
