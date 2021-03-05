import { chatApi } from "../api/api";

const GET_LIST = 'GET_LIST';

const initialState = {
  chats: []
}

export const chatReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case (GET_LIST): {
      return { ...state, chats: [...state.chats, ...action.chats] }
    }
    default: break;
  }
  return state
}

const getListFunc = (chats: any) => {
  return { type: GET_LIST, chats }
}

export const getList = (page = 1) => {
  return async (dispatch: any) => {
    const res = await chatApi.getList(page);
    dispatch(getListFunc(res.data.chats));
  }
}