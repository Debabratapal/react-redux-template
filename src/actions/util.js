import {SNACK, POPULATE_SIDEBAR, CLEAR_SIDEBAR} from '../constant';
import {uuidx} from '../utils'; 
import { API } from '../config';
  
export const showSnack = (dispatch, message) =>
  dispatch({ type: SNACK, snack: { id: uuidx(), message } });

export const sidebarItem = (dispatch, isLogedIn) => {
  if(isLogedIn) {
  fetch(API.sidebar, {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include",
  })
  .then(res => res.json())
  .then(data => {
    if(Array.isArray(data)) {
      dispatch({
        type: POPULATE_SIDEBAR,
        data: data
      })
    }
  })
  } else {
    dispatch({
      type: CLEAR_SIDEBAR
    })
  }

}