import { userApi } from "../api/api";

const SET_SHOW_AUTHORIZATION = 'SET_SHOW_AUTHORIZATION';
const SET_SHOW_REGISTRATION = 'SET_SHOW_REGISTRATION';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
  isAuth: false,
  currentUser: null,
  showAuthorization: false,
  showRegistration: false,
  inputsRegistration: [
    {name: 'name', text: 'имя'},
    {name: 'password', text: 'пароль'},
    {name: 'repeatPassword', text: ' повторите пароль'},
    {name: 'email', text: 'email'}
  ],
  inputsAuthorization: [
    {name: 'name', text: 'имя'},
    {name: 'password', text: 'пароль'},
  ]
}

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case (SET_SHOW_AUTHORIZATION): {
      return { ...state, showAuthorization: action.show }
    }
    case (SET_SHOW_REGISTRATION): {
      return { ...state, showRegistration: action.show }
    }
    case (SET_IS_AUTH): {
      return { ...state, isAuth: action.isAuth }
    }
    default: break;
  }
  return state
}

export const setShowAuthorization = (show: boolean) => {
  return { type: SET_SHOW_AUTHORIZATION, show }
}

export const setShowRegistration = (show: boolean) => {
  return { type: SET_SHOW_REGISTRATION, show }
}
export const setIsAuth = (isAuth: boolean) => {
  return { type: SET_IS_AUTH, isAuth }
}
export const setCurrentUser = (user: any) => {
  return { type: SET_CURRENT_USER, user }
}

export const registrationUser = (userName: string, password: string, email: string) => {
  return async (dispatch: any) => {
    const res = await userApi.registration(userName, password, email);
    if (res.data.isAuth) {
      dispatch(setIsAuth(true))
      dispatch(setCurrentUser(res.data.user));
      dispatch(setShowRegistration(false));
    }
  }
}

export const authorizationUser = (userName: string, password: string) => {
  return async (dispatch: any) => {
    const res = await userApi.authorization(userName, password);
    dispatch(setIsAuth(res.data.isAuth));
    if (res.data.isAuth) {
      dispatch(setCurrentUser(res.data.user))
      dispatch(setShowAuthorization(false));
    }
  }
}