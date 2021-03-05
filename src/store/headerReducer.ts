

const initialState = {
  headerItems: [
    {title: 'Главная', link: '/main'},
    {title: 'Чаты', link: '/chats'},
    {title: 'Пользователи', link: '/users'},
  ]
}

export const headerReducer = (state = initialState, action: any) => {
  switch(action.type) {
    default: break;
  }
  return state
}