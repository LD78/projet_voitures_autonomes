
import * as api from './api';
import * as C from '../constants/user';

export function checkAuth() {
  console.log("CHECK_AUTH");
  return dispatch => {

    dispatch({type: C.CHECK_AUTH});
    const token = localStorage.token;

    if (!token) {
      dispatch({
        type: C.CHECK_AUTH_KO
      });
      return Promise.resolve();
    }

    return api.authenticate(token)
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch({
          type: C.CHECK_AUTH_OK,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: C.CHECK_AUTH_KO
        });
      });
  }
}
