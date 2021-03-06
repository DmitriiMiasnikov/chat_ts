import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chats-api-27.herokuapp.com/'
})

export const userApi = {
  async registration(userName, password, email) {
    const res = await instance.post(`users/registration/?userName=${userName}&password=${password}&email=${email}`);
    return res;
  },
  async authorization(userName, password) {
    const res = await instance.get(`users/authorization/?userName=${userName}&password=${password}`);
    return res;
  },
  async getUser(id) {
    const res = await instance.get(`users/id/${id}`);
    return res;
  },
  async getUsers(page) {
    const res = await instance.get(`users/list/${page}`)
    return res;
  }
}

export const chatApi = {
  async createNew(chatTitle, userId) {
    const res = await instance.post(`chats/create/?chatTitle=${chatTitle}&userId=${userId}`);
    return res;
  },
  async remove(id) {
    const res = await instance.delete(`chats/${id}`);
    return res;
  },
  async rename(id, newTitle) {
    const res = await instance.put(`chats/rename/${id}?newTitle=${newTitle}`);
    return res;
  },
  async getList(page) {
    const res = await instance.get(`chats/list/${page}`)
    return res;
  },
  async getChat(chatId) {
    const res = await instance.get(`chats/id/${chatId}`)
    return res;
  }
}

export const messageApi = {
  async getList(page, chatId) {
    const res = await instance.get(`messages/list/${page}?chatId=${chatId}`)
    return res;
  },
  async post(text, userId, chatId) {
    const res = await instance.post(`messages/?text=${text}&userId=${userId}&chatId=${chatId}`);
    return res;
  },
  async delete(id) {
    const res = await instance.delete(`messages/${id}`);
    return res;
  },
  async edit(text, id) {
    const res = await instance.put(`messages/${id}?text=${text}`);
    return res;
  },
}