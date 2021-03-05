import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/'
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
  }
}

export const chatApi = {
  async getList(page) {
    const res = await instance.get(`chats/list/${page}`)
    return res;
  }
}