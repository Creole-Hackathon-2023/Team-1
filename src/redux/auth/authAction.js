import { authActionTypes } from './authTypes';

export const LoginAction = (payload) => ({
  type: authActionTypes.GET_LOGIN_REQUEST,
  payload,
});

export const RegisterAction = (payload) => ({
  type: AuthActionTypes.GET_REGISTER_REQUEST,
  payload,
});
