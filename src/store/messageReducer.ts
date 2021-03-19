import { messageApi } from "../api/api";

const GET_MESSAGES = 'GET_MESSAGES';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const CREATE_MESSAGE = 'CREATE_MESSAGE';
const EDIT_MESSAGE = 'EDIT_MESSAGE';
const CLEAR_LIST_MESSAGES = 'CLEAR_LIST_MESSAGES';
const SET_PAGE_MESSAGES = 'SET_PAGE_MESSAGES';

const initialState = {
  messages: [],
  pageMessages: 1
}

export const messageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case (GET_MESSAGES): {
      return { ...state, messages: [...action.messages, ...state.messages] }
    }
    case (CLEAR_LIST_MESSAGES): {
      return { ...initialState }
    }
    case (CREATE_MESSAGE): {
      return { ...state, messages: [...state.messages, action.message] }
    }
    case (SET_PAGE_MESSAGES): {
      return {...state, pageMessages: action.page}
    }
    case (DELETE_MESSAGE): {
      const messages = [...state.messages];
      messages.splice(state.messages.findIndex((el: any) => el._id === action.id), 1);
      return { ...state, messages: messages }
    }
    case (EDIT_MESSAGE): {
      const messages = [...state.messages];
      messages.map((el: any) => {
        if (el._id === action.id) el.text = action.text
        return el
      })
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
const editMessageFunc = (id: string, text: string) => {
  return { type: EDIT_MESSAGE, id, text }
}

export const clearListMessages = () => {
  return { type: CLEAR_LIST_MESSAGES }
}

export const setPageMessages = (page: number) => {
  return { type: SET_PAGE_MESSAGES, page }
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

export const editMessage = (id: string, text: string) => {
  return async (dispatch: any) => {
    await messageApi.edit(id, text);
    dispatch(editMessageFunc(id, text))
  }
}