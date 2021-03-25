import { userApi } from "../api/api";

const GET_USER = 'GET_USER';
const GET_USERS = 'GET_USERS';

const initialState = {
  user: null,
  users: [],
  usersPage: 1
}

export const userReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case(GET_USER) :{
      return { ...state, user: action.user }
    }
    case(GET_USERS) :{
      return { ...state, users: action.users }
    }
    default: break;
  }
  return state
}

const getUserFunc = (user: any) => {
  return { type: GET_USER, user }
}

const getUsersFunc = (users: any) => {
  return { type: GET_USERS, users }
}

export const getUser = (id: string) => {
  return async (dispatch: any) => {
    const res = await userApi.getUser(id);
    dispatch(getUserFunc(res.data.user));
  }
}

export const getUsers = (page: number) => {
  return async (dispatch: any) => {
    const res = await userApi.getUsers(page);
    dispatch(getUsersFunc(res.data.users));
  }
}