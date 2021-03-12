import { chatApi } from "../api/api";

const GET_LIST = 'GET_LIST';
const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
const CLEAR_LIST = 'CLEAR_LIST';
const REMOVE_CHAT = 'REMOVE_CHAT';
const RENAME_CHAT = 'RENAME_CHAT';
const CREATE_CHAT = 'CREATE_CHAT';

const initialState = {
  chats: [],
  currentChat: null,
  inputsCreateChat: [
    { name: 'chatTitle', text: 'Введите название нового чата' },
  ]
}

export const chatReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case (GET_LIST): {
      return { ...state, chats: [...state.chats, ...action.chats] }
    }
    case (SET_CURRENT_CHAT): {
      return { ...state, currentChat: action.chat }
    }
    case (CREATE_CHAT): {
      return { ...state, chats: [action.chat, ...state.chats] }
    }
    case (REMOVE_CHAT): {
      const chats = [...state.chats];
      chats.splice(state.chats.findIndex((el: any) => el.id === action.id), 1);
      return { ...state, chats: chats }
    }
    case (RENAME_CHAT): {
      const chats = [...state.chats];
      chats.map((el: any) => {
        if (el.id === action.id) el.title = action.newTitle
        return el
      })
      return { ...state, chats: chats }
    }
    case (CLEAR_LIST): {
      return { ...state, chats: [] }
    }
    default: break;
  }
  return state
}

const getListFunc = (chats: any) => {
  return { type: GET_LIST, chats }
}

const setCurrentChat = (chat: any) => {
  return { type: SET_CURRENT_CHAT, chat }
}

const removeChatFunc = (id: string) => {
  return { type: REMOVE_CHAT, id }
}

const renameChatFunc = (id: string, newTitle: string) => {
  return { type: RENAME_CHAT, id, newTitle }
}

const createChatFunc = (chat: string) => {
  return { type: CREATE_CHAT, chat }
}

export const clearList = () => {
  return { type: CLEAR_LIST }
}

export const getList = (page = 1) => {
  return async (dispatch: any) => {
    const res = await chatApi.getList(page);
    dispatch(getListFunc(res.data.chats));
  }
}

export const getChat = (chatId: string) => {
  return async (dispatch: any) => {
    const res = await chatApi.getChat(chatId);
    dispatch(setCurrentChat(res.data.chat));
  }
}

export const createNewChat = (chatTitle: string, userId: string) => {
  return async (dispatch: any) => {
    const res = await chatApi.createNew(chatTitle, userId);
    dispatch(createChatFunc(res.data.chat));
    // dispatch(setCurrentChat(res.data.chat));
  }
}

export const removeChat = (id: string) => {
  return async (dispatch: any) => {
    await chatApi.remove(id);
    dispatch(removeChatFunc(id))
  }
}

export const renameChat = (id: string, newTitle: string) => {
  return async (dispatch: any) => {
    await chatApi.rename(id, newTitle);
    dispatch(renameChatFunc(id, newTitle))
  }
}