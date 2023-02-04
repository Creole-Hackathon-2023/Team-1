import { authActionTypes } from './authTypes';

const initState = {};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case authActionTypes.GET_LOGIN_SUCCESS:
      return {
        ...state,
      };

    case authActionTypes.GET_REGISTER_SUCCESS:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
