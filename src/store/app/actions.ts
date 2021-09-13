import { AUTH_API } from "../../constants";

export const SET_IS_AUTHED: string = 'APP::SET_IS_AUTHED';
export const SET_LOADING_STATUS: string = 'APP::SET_LOADING_STATUS';
export const SET_ERROR_STATUS: string = 'APP::SET_ERROR_STATUS';
export const SET_IDLE_STATUS: string = 'APP::SET_IDLE_STATUS';

export const setLoadingStatus = () => {
  return {
    type: SET_LOADING_STATUS
  };
};

export const setErrorStatus = () => {
  return {
    type: SET_ERROR_STATUS
  };
};

export const setIdleStatus = () => {
  return {
    type: SET_IDLE_STATUS
  };
};

export const setIsAuthed = (isAuthed: boolean) => {
  return {
    type: SET_IS_AUTHED,
    payload: isAuthed
  };
};

export const fetchAuth = () => {
  return (dispatch: any) => {
    dispatch(setLoadingStatus());

    fetch(AUTH_API, {method: 'POST'})
      .then(response => {
        if (!response.ok) {
          throw Error('Something wrong with authentication');
        }
        return response.json();
      })
      .then(data => {
        dispatch(setIsAuthed(data.success));
      })
      .catch(err => {
        console.error(err);
        dispatch(setErrorStatus());
      })
      .finally(() => {
        dispatch(setIdleStatus());
      });
  };
};
