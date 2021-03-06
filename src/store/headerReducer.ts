

const initialState = {
  headerItems: [
    {title: 'Главная', link: '/main'},
    {title: 'Чаты', link: '/chats'},
    {title: 'Пользователи', link: '/users'},
  ],
  headerItemsRight: [
    {title: 'Регистрация', name: 'registration'},
    {title: 'Авторизация', name: 'authorization'},
  ],
}

export const headerReducer = (state = initialState, action: any) => {
  switch(action.type) {
    default: break;
  }
  return state
}