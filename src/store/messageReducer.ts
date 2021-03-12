import { messageApi } from "../api/api";

const GET_MESSAGES = 'GET_MESSAGES';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const CREATE_MESSAGE = 'CREATE_MESSAGE';

const initialState = {
  messages: [],
  pageMessages: 1
}

export const messageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case (GET_MESSAGES): {
      return { ...state, messages: [...state.messages, ...action.messages] }
    }
    case (CREATE_MESSAGE): {
      return { ...state, messages: [...state.messages, action.message] }
    }
    case (DELETE_MESSAGE): {
      const messages = [...state.messages];
      messages.splice(state.messages.findIndex((el: any) => el.id === action.id), 1);
      return { ...state, messages: messages }
    }
    default: break;
  }
  return state
}

const getMessagesFunc = (messages: any) => {
  return { type: GET_MESSAGES, messages }
}

const createMessageFunc = (message: string) => {
  return { type: CREATE_MESSAGE, message }
}

const deleteMessageFunc = (id: string) => {
  return { type: DELETE_MESSAGE, id }
}

export const getMessages = (page: number, chatId: string) => {
  return async (dispatch: any) => {
    const res = await messageApi.getList(page, chatId);
    dispatch(getMessagesFunc(res.data.messages));
  }
}

export const createMessage = (message: string, userId: string, chatId: string) => {
  return async (dispatch: any) => {
    const res = await messageApi.post(message, userId, chatId);
    dispatch(createMessageFunc(res.data.message))
  }
}

export const deleteMessage = (id: string) => {
  return async (dispatch: any) => {
    await messageApi.delete(id);
    dispatch(deleteMessageFunc(id))
  }
}