export const SET_IS_USER_PAGE: string = 'USER::SET_IS_USER_PAGE';

export const setIsUserPage = (flag: boolean) => {
  return {
    type: SET_IS_USER_PAGE,
    payload: flag
  };
};
