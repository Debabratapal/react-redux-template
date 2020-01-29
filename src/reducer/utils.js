import { SNACK, POPULATE_SIDEBAR, CLEAR_SIDEBAR } from '../constant';

const initialState = {
  snack: '',
  sidebarItem: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SNACK:
      return {
        ...state,
        snack: action.snack
      };
    case POPULATE_SIDEBAR : {
      return {
        ...state,
        sidebarItem: action.data,
      }
    }
    case CLEAR_SIDEBAR : {
      return {
        ...state,
        sidebarItem: []
      }
    }
    default:
      return state;
  }
}