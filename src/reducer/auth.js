import { IS_AUTHENTICATED, LOGOUT } from "../constant";

const initialState = {
  authenticated: false,
  user: {},
  members: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        user: action.user
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: {}
      };

    default:
      return state;
  }
};
