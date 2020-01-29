import { API } from "../config";
import { IS_AUTHENTICATED, RESET_STORE, LOGOUT } from "../constant";
import { showSnack, sidebarItem } from "./util";
import { beginTask, endTask } from "redux-nprogress";

export const login = loginObj => dispatch => {
  dispatch(beginTask());
  fetch(`${API.login}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(loginObj)
  })
    .then(res => res.json())
    .then(data => {
      if (data.loggedIn) {
        dispatch({
          type: IS_AUTHENTICATED,
          user: data
        });
        sidebarItem(dispatch, true);
        dispatch(endTask());
      } else {
        dispatch(endTask());
        showSnack(dispatch, "Wrong User Name or Password");
      }
    })
    .catch(err => {
      dispatch(endTask());
      showSnack(dispatch, "Something went wrong");
    });
};

export const logout = user => dispatch => {
  dispatch(beginTask());
  fetch(API.logout, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({})
  })
    .then(res => res.json())
    .then(data => {
      dispatch(endTask());
      dispatch({ type: LOGOUT });
      sidebarItem(dispatch, false);
      dispatch({type: RESET_STORE})
      showSnack(dispatch, "Successfully Logged out");
    })
    .catch(error => {
      console.error(error);
      dispatch(endTask());
      dispatch({ type: RESET_STORE });
      showSnack(dispatch, "Something went wrong");
    });
};
