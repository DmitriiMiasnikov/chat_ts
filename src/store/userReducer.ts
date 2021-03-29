import { userApi } from "../api/api";

const GET_USER = "GET_USER";
const GET_USERS = "GET_USERS";
const CLEAR_USER = 'CLEAR_USER';

const initialState = {
  user: null,
  userChats: null,
  userMessages: null,
  users: [],
  usersPage: 1,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        user: action.user,
        userChats: action.userChats,
        userMessages: action.userMessages,
      };
    }
    case CLEAR_USER: {
      return {
        ...state,
        user: null,
        userChats: null,
        userMessages: null,
      };
    }
    case GET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      break;
  }
  return state;
};

const getUserFunc = (user: any, userChats: any, userMessages: any) => {
  return { type: GET_USER, user, userChats, userMessages };
};

const getUsersFunc = (users: any) => {
  return { type: GET_USERS, users };
};

export const clearUser = () => {
  return { type: CLEAR_USER };
};

export const getUser = (id: string) => {
  return async (dispatch: any) => {
    const res = await userApi.getUser(id);
    dispatch(
      getUserFunc(res.data.user, res.data.userChats, res.data.userMessages)
    );
  };
};

export const getUsers = (page: number) => {
  return async (dispatch: any) => {
    const res = await userApi.getUsers(page);
    dispatch(getUsersFunc(res.data.users));
  };
};
