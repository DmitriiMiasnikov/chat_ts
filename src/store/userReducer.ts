import { userApi } from "../api/api";

const GET_USER = 'GET_USER';

const initialState = {
  user: null
}

export const userReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case(GET_USER) :{
      return { ...state, user: action.user }
    }
    default: break;
  }
  return state
}

const getUserFunc = (user: any) => {
  return { type: GET_USER, user }
}

export const getUser = (id: string) => {
  return async (dispatch: any) => {
    const res = await userApi.getUser(id);
    dispatch(getUserFunc(res.data.user));
  }
}